// src/services/PaymentsService.js
const Payment = require('../models/PaymentsModel');

const PaymentService = {
    createPayment: async (paymentData) => {
        try {
            const result = await Payment.create(paymentData);
            return { message: 'Payment successfully created', data: paymentData, insertId: result.insertId };
        } catch (err) {
            throw err; // Mengoper kesalahan ke kontroler
        }
    },
    getAllPayments: async () => {
        try {
            const results = await Payment.getAll();
            return results;
        } catch (err) {
            throw err; // Mengoper kesalahan ke kontroler
        }
    },
    getPaymentById: async (id) => {
        try {
            const result = await Payment.getById(id);
            return result;
        } catch (err) {
            throw err; // Mengoper kesalahan ke kontroler
        }
    },
    updatePayment: async (id, paymentData) => {
        try {
            const result = await Payment.update(id, paymentData);
            return { message: 'Payment successfully updated', affectedRows: result.affectedRows };
        } catch (err) {
            throw err; // Mengoper kesalahan ke kontroler
        }
    },
    deletePayment: async (id) => {
        try {
            const result = await Payment.delete(id);
            return { message: 'Payment successfully deleted', affectedRows: result.affectedRows };
        } catch (err) {
            throw err; // Mengoper kesalahan ke kontroler
        }
    },
};

module.exports = PaymentService;
