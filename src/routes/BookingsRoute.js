const express = require("express");
const bookingController = require("../controllers/BookingsController");
const router = express.Router();

router.get("/bookings", bookingController.getAllBookings);
router.get("/bookings/:id", bookingController.getBookingById);
router.post("/bookings", bookingController.addBooking);
router.put("/bookings/:id", bookingController.updateBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);

module.exports = router;
