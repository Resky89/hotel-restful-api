// src/controllers/PaymentControllers.js
const PaymentService = require('../services/PaymentsService');
const { validatePayment } = require('../validations/PaymentsValidation');
const { sendSuccessResponse, sendErrorResponse } = require('../helpers/response');

// Kontroler untuk membuat pembayaran
const createPayment = async(req, res) => {
    try {
        const paymentData = req.body;
        const { error } = validatePayment(paymentData);
        if (error) {
            return sendErrorResponse(res, 400, "Validation failed", error.details[0].message);
        }
        const result = await PaymentService.createPayment(paymentData);
        sendSuccessResponse(res, 201, "Payment created successfully", result);
    } catch (error) {
        sendErrorResponse(res, 500, "Failed to create payment", error.message);
    }
};

// Kontroler untuk mendapatkan semua pembayaran
const getAllPayments = async(req, res) => {
    try {
        const payments = await PaymentService.getAllPayments();
        sendSuccessResponse(res, 200, "Payments retrieved successfully", payments);
    } catch (error) {
        sendErrorResponse(res, 500, "Failed to retrieve payments", error.message);
    }
};

// Kontroler untuk mendapatkan pembayaran berdasarkan ID
const getPaymentById = async(req, res) => {
    try {
        const payment = await PaymentService.getPaymentById(req.params.id);
        if (!payment) {
            return sendErrorResponse(res, 404, "Payment not found");
        }
        sendSuccessResponse(res, 200, "Payment retrieved successfully", payment);
    } catch (error) {
        sendErrorResponse(res, 500, "Failed to retrieve payment", error.message);
    }
};

// Kontroler untuk memperbarui pembayaran
const updatePayment = async(req, res) => {
    try {
        const paymentData = req.body;
        const { error } = validatePayment(paymentData);
        if (error) {
            return sendErrorResponse(res, 400, "Validation failed", error.details[0].message);
        }
        const updatedPayment = await PaymentService.updatePayment(req.params.id, paymentData);
        if (!updatedPayment) {
            return sendErrorResponse(res, 404, "Payment not found");
        }
        sendSuccessResponse(res, 200, "Payment updated successfully", updatedPayment);
    } catch (error) {
        sendErrorResponse(res, 500, "Failed to update payment", error.message);
    }
};

// Kontroler untuk menghapus pembayaran
const deletePayment = async(req, res) => {
    try {
        const result = await PaymentService.deletePayment(req.params.id);
        if (!result) {
            return sendErrorResponse(res, 404, "Payment not found");
        }
        sendSuccessResponse(res, 200, "Payment deleted successfully");
    } catch (error) {
        sendErrorResponse(res, 500, "Failed to delete payment", error.message);
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
