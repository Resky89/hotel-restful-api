// src/controllers/PaymentControllers.js
const PaymentService = require('../services/PaymentsService');

// Kontroler untuk membuat pembayaran
const createPayment = async(req, res) => {
    try {
        const paymentData = req.body; // Pastikan transaction_id ada di sini
        const result = await PaymentService.createPayment(paymentData);
        res.status(201).json({ message: 'Data successfully added', data: result }); // Mengembalikan data yang baru ditambahkan
    } catch (error) {
        res.status(500).json({ message: 'Failed to create payment', error });
    }
};

// Kontroler untuk mendapatkan semua pembayaran
const getAllPayments = async(req, res) => {
    try {
        const payments = await PaymentService.getAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve payments', error });
    }
};

// Kontroler untuk mendapatkan pembayaran berdasarkan ID
const getPaymentById = async(req, res) => {
    try {
        const payment = await PaymentService.getPaymentById(req.params.id);
        if (payment.length === 0) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve payment', error });
    }
};

// Kontroler untuk memperbarui pembayaran
const updatePayment = async(req, res) => {
    try {
        const paymentData = req.body; // Pastikan transaction_id ada di sini
        const result = await PaymentService.updatePayment(req.params.id, paymentData);
        res.status(200).json({ message: result.message, data: {...paymentData, id: req.params.id }, affectedRows: result.affectedRows }); // Mengembalikan data yang diperbarui
    } catch (error) {
        res.status(500).json({ message: 'Failed to update payment', error });
    }
};

// Kontroler untuk menghapus pembayaran
const deletePayment = async(req, res) => {
    try {
        const result = await PaymentService.deletePayment(req.params.id);
        res.status(200).json({ message: result.message }); // Pastikan ini mengembalikan pesan
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete payment', error });
    }
};

// Mengekspor semua kontroler
module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment,
};