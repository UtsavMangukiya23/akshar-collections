import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OrdersPage from './pages/OrdersPage'
import ScrollToTop from './components/ui/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            fontFamily: 'Poppins, sans-serif',
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:category" element={<ShopPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}
