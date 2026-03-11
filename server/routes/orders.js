import express from 'express';
import jwt from 'jsonwebtoken';
import db from '../database.js';
import { JWT_SECRET } from './auth.js';

const router = express.Router();

// Auth middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required. Please login first.' });
  }
  try {
    const decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token. Please login again.' });
  }
}

// Optional auth — attach userId if token is present, but don't require it
function optionalAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    try {
      const decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
      req.userId = decoded.id;
    } catch {
      // Token invalid — proceed as guest
    }
  }
  next();
}

// POST /api/orders — create a new order (login not required)
router.post('/', optionalAuth, (req, res) => {
  const { items, totalAmount, shippingAmount, shippingAddress, paymentMethod, customerName, customerEmail } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must contain at least one item' });
  }
  if (totalAmount == null) {
    return res.status(400).json({ error: 'Total amount is required' });
  }

  const insertOrder = db.prepare(`
    INSERT INTO orders (user_id, customer_name, customer_email, total_amount, shipping_amount, shipping_address, payment_method)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const insertItem = db.prepare(`
    INSERT INTO order_items (order_id, product_name, product_id, size, color, quantity, price, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  // Use a transaction to ensure atomicity
  const createOrder = db.transaction(() => {
    const orderResult = insertOrder.run(
      req.userId || null,
      customerName || null,
      customerEmail || null,
      totalAmount,
      shippingAmount || 0,
      shippingAddress || '',
      paymentMethod || 'cod'
    );
    const orderId = orderResult.lastInsertRowid;

    for (const item of items) {
      insertItem.run(
        orderId,
        item.productName || item.name,
        item.productId || item.id || null,
        item.size || null,
        item.color || null,
        item.quantity,
        item.price,
        item.image || null
      );
    }

    return orderId;
  });

  try {
    const orderId = createOrder();

    // Fetch the created order with items
    const order = db.prepare('SELECT * FROM orders WHERE order_id = ?').get(orderId);
    const orderItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);

    res.status(201).json({
      order: { ...order, items: orderItems },
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// GET /api/orders — get all orders for the logged-in user
router.get('/', authenticate, (req, res) => {
  const orders = db.prepare(`
    SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC
  `).all(req.userId);

  // Attach items to each order
  const getItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?');
  const ordersWithItems = orders.map(order => ({
    ...order,
    items: getItems.all(order.order_id),
  }));

  res.json({ orders: ordersWithItems });
});

// GET /api/orders/:id — get a specific order
router.get('/:id', authenticate, (req, res) => {
  const order = db.prepare('SELECT * FROM orders WHERE order_id = ? AND user_id = ?').get(
    req.params.id,
    req.userId
  );

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(order.order_id);
  res.json({ order: { ...order, items } });
});

export default router;
