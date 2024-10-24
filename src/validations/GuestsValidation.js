const Joi = require('joi');

const guestSchema = Joi.object({
  full_name: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
  phone: Joi.string().max(100).required(),
  id_card_type: Joi.string().valid('ktp', 'passport', 'sim').required(),
  id_card_number: Joi.string().max(100).required(),
});

module.exports = {
  guestSchema
};
