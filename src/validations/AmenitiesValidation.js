const Joi = require('joi');

// Skema validasi untuk amenitas
const amenitySchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().required(),
    price: Joi.number().precision(2).positive().required()
});

// Fungsi untuk memvalidasi amenitas
const validateAmenity = (amenity) => {
    return amenitySchema.validate(amenity);
};

module.exports = {
    validateAmenity
};


