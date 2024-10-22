// src/routes/AmenitiesRoutes.js
const express = require('express');
const router = express.Router();
const AmenitiesController = require('../controllers/AmenitiesController');

router.get('/amenities', AmenitiesController.getAllAmenities);
router.get('/amenities/:id', AmenitiesController.getAmenityById);
router.post('/amenities', AmenitiesController.addAmenity);
router.put('/amenities/:id', AmenitiesController.updateAmenity);
router.delete('/amenities/:id', AmenitiesController.deleteAmenity);


module.exports = router;

