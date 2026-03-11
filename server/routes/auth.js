import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../database.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'akshar-collection-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) {
    return res.status(409).json({ error: 'An account with this email already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const result = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)').run(name, email, hashedPassword);

  const user = { id: result.lastInsertRowid, name, email, created_at: new Date().toISOString() };
  const token = generateToken(user);

  res.status(201).json({ user, token });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = generateToken(user);
  const { password: _, ...safeUser } = user;

  res.json({ user: safeUser, token });
});

// GET /api/auth/me — get current user from token
router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    const user = db.prepare('SELECT id, name, email, created_at FROM users WHERE id = ?').get(decoded.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
});

export default router;
export { JWT_SECRET };
