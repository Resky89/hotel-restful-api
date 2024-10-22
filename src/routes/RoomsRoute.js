const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/RoomsController');

router.get('/rooms', roomsController.getAllRooms);
router.get('/rooms/:id', roomsController.getRoomById);
router.post('/rooms', roomsController.createRoom);
router.put('/rooms/:id', roomsController.updateRoom);
router.delete('/rooms/:id', roomsController.deleteRoom);

module.exports = router;
