// src/services/PaymentsService.js
const Payment = require('../models/PaymentsModel');

const PaymentService = {
    createPayment: async (paymentData) => {
        try {
            const result = await Payment.create(paymentData);
            const createdPayment = await Payment.getById(result.insertId);
            return createdPayment;
        } catch (err) {
            throw err;
        }
    },
    getAllPayments: async () => {
        try {
            return await Payment.getAll();
        } catch (err) {
            throw err;
        }
    },
    getPaymentById: async (id) => {
        try {
            return await Payment.getById(id);
        } catch (err) {
            throw err;
        }
    },
    updatePayment: async (id, paymentData) => {
        try {
            await Payment.update(id, paymentData);
            return await Payment.getById(id);
        } catch (err) {
            throw err;
        }
    },
    deletePayment: async (id) => {
        try {
            const result = await Payment.delete(id);
            return result.affectedRows > 0;
        } catch (err) {
            throw err;
        }
    },
};

module.exports = PaymentService;
