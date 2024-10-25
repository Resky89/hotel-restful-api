// src/models/payment.js
const db = require("../config/database");

// Model untuk pembayaran
const Payment = {
  create: async (paymentData) => {
    const query =
      "INSERT INTO payment (booking_id, amount, payment_method, payment_status, transaction_id, payment_date) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(query, [
      paymentData.booking_id,
      paymentData.amount,
      paymentData.payment_method,
      paymentData.payment_status,
      paymentData.transaction_id,
      paymentData.payment_date,
    ]);
    return result;
  },
  getAll: async () => {
    const query = "SELECT * FROM payment";
    const [results] = await db.query(query);
    return results;
  },
  getById: async (id) => {
    const query = "SELECT * FROM payment WHERE id = ?";
    const [result] = await db.query(query, [id]);
    return result[0];
  },
  update: async (id, paymentData) => {
    const query =
      "UPDATE payment SET booking_id = ?, amount = ?, payment_method = ?, payment_status = ?, transaction_id = ?, payment_date = ? WHERE id = ?";
    const [result] = await db.query(query, [
      paymentData.booking_id,
      paymentData.amount,
      paymentData.payment_method,
      paymentData.payment_status,
      paymentData.transaction_id,
      paymentData.payment_date,
      id,
    ]);
    return result;
  },
  delete: async (id) => {
    const query = "DELETE FROM payment WHERE id = ?";
    const [result] = await db.query(query, [id]);
    return result;
  },
};

module.exports = Payment;
