const Joi = require('joi');

const paymentSchema = Joi.object({
    booking_id: Joi.number().integer().required(),
    amount: Joi.number().positive().precision(2).required(),
    payment_method: Joi.string().valid('credit_card', 'debit_card', 'cash', 'transfer').required(),
    payment_status: Joi.string().valid('pending', 'completed', 'failed').required(),
    transaction_id: Joi.string().max(100).required(),
    payment_date: Joi.date().iso().required(),
});

const validatePayment = (payment) => {
    return paymentSchema.validate(payment);
};

module.exports = {
    validatePayment
};
