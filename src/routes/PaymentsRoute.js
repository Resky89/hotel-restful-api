// src/routes/PaymentRoutes.js
const express = require('express');
const router = express.Router();
const PaymentControllers = require('../controllers/PaymentsControllers');

// Rute untuk membuat pembayaran
router.post('/', PaymentControllers.createPayment);

// Rute untuk mendapatkan semua pembayaran
router.get('/', PaymentControllers.getAllPayments);

// Rute untuk mendapatkan pembayaran berdasarkan ID
router.get('/:id', PaymentControllers.getPaymentById);

// Rute untuk memperbarui pembayaran
router.put('/:id', PaymentControllers.updatePayment);

// Rute untuk menghapus pembayaran
router.delete('/:id', PaymentControllers.deletePayment);

module.exports = router;