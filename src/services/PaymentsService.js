// src/services/PaymentServices.js
const Payment = require('../models/PaymentsModel');

const PaymentService = {
    createPayment: (paymentData) => {
        return new Promise((resolve, reject) => {
            Payment.create(paymentData, (err, result) => {
                if (err) {
                    return reject(err);
                }
                // Mengembalikan data yang diposting
                resolve({ message: 'Payment successfully created', data: paymentData, insertId: result.insertId });
            });
        });
    },
    getAllPayments: () => {
        return new Promise((resolve, reject) => {
            Payment.getAll((err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    getPaymentById: (id) => {
        return new Promise((resolve, reject) => {
            Payment.getById(id, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    },
    updatePayment: (id, paymentData) => {
        return new Promise((resolve, reject) => {
            Payment.update(id, paymentData, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve({ message: 'Payment successfully updated', affectedRows: result.affectedRows });
            });
        });
    },
    deletePayment: (id) => {
        return new Promise((resolve, reject) => {
            Payment.delete(id, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve({ message: 'Payment successfully deleted', affectedRows: result.affectedRows }); // Pastikan ada pesan
            });
        });
    },
};

module.exports = PaymentService;