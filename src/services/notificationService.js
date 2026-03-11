/**
 * Notification Service for Akshar Collection
 * Handles WhatsApp and Email delivery notifications on order placement.
 */

function generateOrderId() {
  return 'AC' + Date.now().toString().slice(-8);
}

function formatOrderItems(cart) {
  return cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} (${item.size}, ${item.color}) x${item.quantity} — ₹${(item.price * item.quantity).toLocaleString()}`
    )
    .join('\n');
}

function getEstimatedDelivery() {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return deliveryDate.toLocaleDateString('en-IN', options);
}

/**
 * Build the full order summary object used by both WhatsApp and Email.
 */
export function buildOrderSummary({ formData, cart, cartTotal, shipping, total }) {
  const orderId = generateOrderId();
  const estimatedDelivery = getEstimatedDelivery();
  const items = formatOrderItems(cart);
  const shippingAddress = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;

  return {
    orderId,
    customerName: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    phone: formData.phone,
    shippingAddress,
    paymentMethod: formData.paymentMethod.toUpperCase(),
    items,
    cartTotal,
    shipping,
    total,
    estimatedDelivery,
    itemCount: cart.length,
  };
}

/**
 * Open WhatsApp with pre-filled delivery info message to the customer's number.
 * Uses the WhatsApp Click-to-Chat API (wa.me).
 */
export function sendWhatsAppNotification(orderSummary) {
  const phone = orderSummary.phone.replace(/\D/g, '');
  // Ensure Indian country code
  const fullPhone = phone.startsWith('91') ? phone : `91${phone}`;

  const message = `🛍️ *Akshar Collection — Order Confirmed!*

Hello ${orderSummary.customerName}! 🙏

Your order has been placed successfully. Here are your delivery details:

📦 *Order ID:* #${orderSummary.orderId}
📅 *Order Date:* ${new Date().toLocaleDateString('en-IN')}

*Items Ordered:*
${orderSummary.items}

💰 *Subtotal:* ₹${orderSummary.cartTotal.toLocaleString()}
🚚 *Shipping:* ${orderSummary.shipping === 0 ? 'FREE' : '₹' + orderSummary.shipping}
💳 *Payment:* ${orderSummary.paymentMethod}
✅ *Total Paid:* ₹${orderSummary.total.toLocaleString()}

📍 *Delivery Address:*
${orderSummary.shippingAddress}

📦 *Estimated Delivery:* ${orderSummary.estimatedDelivery}

You'll receive tracking updates on this number. For any queries, reply to this message or call us at +91 98765 43210.

Thank you for shopping with *Akshar Collection*! ✨
_Weaving Dreams Into Reality_`;

  const whatsappUrl = `https://wa.me/${encodeURIComponent(fullPhone)}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  return true;
}

/**
 * Compose an email with delivery info using mailto link.
 * Opens the user's default mail client.
 */
export function sendEmailNotification(orderSummary) {
  const subject = `Akshar Collection — Order Confirmed #${orderSummary.orderId}`;

  const body = `Dear ${orderSummary.customerName},

Thank you for your order with Akshar Collection!

ORDER DETAILS
─────────────────────────────
Order ID: #${orderSummary.orderId}
Order Date: ${new Date().toLocaleDateString('en-IN')}

Items Ordered:
${orderSummary.items}

Subtotal: ₹${orderSummary.cartTotal.toLocaleString()}
Shipping: ${orderSummary.shipping === 0 ? 'FREE' : '₹' + orderSummary.shipping}
Payment Method: ${orderSummary.paymentMethod}
Total: ₹${orderSummary.total.toLocaleString()}

DELIVERY INFORMATION
─────────────────────────────
Shipping Address: ${orderSummary.shippingAddress}
Estimated Delivery: ${orderSummary.estimatedDelivery}

You will receive tracking updates via WhatsApp and email once your order is shipped.

For any queries, contact us:
Phone: +91 98765 43210
Email: support@aksharcollection.com

Thank you for choosing Akshar Collection!
Weaving Dreams Into Reality`;

  const mailtoUrl = `mailto:${encodeURIComponent(orderSummary.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
  return true;
}
