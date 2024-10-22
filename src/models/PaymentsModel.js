// src/models/payment.js
const db = require("../config/database");

// Model untuk pembayaran
const Payment = {
  create: (paymentData, callback) => {
    console.log(paymentData); // Tambahkan log ini untuk debugging
    const query =
      "INSERT INTO payment (booking_id, amount, payment_method, payment_status, transaction_id, payment_date) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        paymentData.booking_id,
        paymentData.amount,
        paymentData.payment_method,
        paymentData.payment_status,
        paymentData.transaction_id,
        paymentData.payment_date,
      ],
      callback
    );
  },
  getAll: (callback) => {
    const query = "SELECT * FROM payment";
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM payment WHERE id = ?";
    db.query(query, [id], callback);
  },
  update: (id, paymentData, callback) => {
    const query =
      "UPDATE payment SET booking_id = ?, amount = ?, payment_method = ?, payment_status = ?, transaction_id = ?, payment_date = ? WHERE id = ?";
    db.query(
      query,
      [
        paymentData.booking_id,
        paymentData.amount,
        paymentData.payment_method,
        paymentData.payment_status,
        paymentData.transaction_id,
        paymentData.payment_date,
        id,
      ],
      callback
    );
  },
  delete: (id, callback) => {
    const query = "DELETE FROM payment WHERE id = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Payment;
