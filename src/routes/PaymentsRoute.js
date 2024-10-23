// src/routes/PaymentRoutes.js
const express = require('express');
const router = express.Router();
const PaymentControllers = require('../controllers/PaymentsControllers');

// Rute untuk membuat pembayaran
router.post('/payments', PaymentControllers.createPayment);

// Rute untuk mendapatkan semua pembayaran
router.get('/payments', PaymentControllers.getAllPayments);

// Rute untuk mendapatkan pembayaran berdasarkan ID
router.get('/payments/:id', PaymentControllers.getPaymentById);

// Rute untuk memperbarui pembayaran
router.put('/payments/:id', PaymentControllers.updatePayment);

// Rute untuk menghapus pembayaran
router.delete('/payments/:id', PaymentControllers.deletePayment);

module.exports = router;
