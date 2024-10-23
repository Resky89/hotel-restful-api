const Joi = require('joi');

const guestValidation = {
  createGuest: Joi.object({
    full_name: Joi.string().max(100).required(),
    email: Joi.string().email().max(100).required(),
    phone: Joi.string().max(100).required(),
    id_card_type: Joi.string().valid('ktp', 'passport', 'sim').required(),
    id_card_number: Joi.string().max(100).required(),
  }),

  updateGuest: Joi.object({
    full_name: Joi.string().max(100),
    email: Joi.string().email().max(100),
    phone: Joi.string().max(100),
    id_card_type: Joi.string().valid('ktp', 'passport', 'sim'),
    id_card_number: Joi.string().max(100),
  }),
};

module.exports = guestValidation;
