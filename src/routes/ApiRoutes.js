const express = require("express");
const router = express.Router();

const connRoutes = require("./conn-route");
const bookingRoutes = require("./BookingsRoute");
const amenitiesRoutes = require("./AmenitiesRoute");
const roomRoutes = require("./RoomsRoute");
const guestRoutes = require("./guestsRoute");
const paymentRoutes = require("./PaymentsRoute");

router.use(connRoutes);
router.use(bookingRoutes);
router.use(amenitiesRoutes);
router.use(roomRoutes);
router.use(guestRoutes);
router.use(paymentRoutes);

module.exports = router;
