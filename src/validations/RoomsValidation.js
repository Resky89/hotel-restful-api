const Joi = require('joi');

const roomSchema = Joi.object({
  room_number: Joi.string().required(),
  type: Joi.string().valid('single', 'double', 'suite').required(),
  price: Joi.number().positive().precision(2).required(),
  capacity: Joi.number().integer().positive().required(),
  status: Joi.string().valid('available', 'occupied', 'maintenance').required()
});

const validateRoom = (room) => {
  return roomSchema.validate(room);
};

module.exports = {
  validateRoom
};
