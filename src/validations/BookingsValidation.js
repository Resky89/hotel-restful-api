const Joi = require('joi');

const bookingSchema = Joi.object({
  guest_id: Joi.number().integer().required(),
  room_id: Joi.number().integer().required(),
  check_in_date: Joi.date().iso().required(),
  check_out_date: Joi.date().iso().min(Joi.ref("check_in_date")).required(),
  total_guests: Joi.number().integer().min(1).required(),
  status: Joi.string().valid("pending", "confirmed", "cancelled").required(),
  total_price: Joi.number().precision(2).positive().required(),
});

module.exports = {
  bookingSchema
};
