const bookingService = require("../services/BookingService");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../helpers/response");

const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    sendSuccessResponse(res, 200, "Bookings fetched successfully", bookings);
  } catch (error) {
    console.error(`Failed to fetch bookings: ${error.message}`);
    sendErrorResponse(res, 500, "Failed to fetch bookings", error.message);
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    sendSuccessResponse(res, 200, "Booking fetched successfully", booking);
  } catch (error) {
    if (error.message.includes("not found")) {
      sendErrorResponse(res, 404, "Booking not found", error.message);
    } else {
      console.error(`Failed to fetch booking: ${error.message}`);
      sendErrorResponse(res, 500, "Failed to fetch booking", error.message);
    }
  }
};

const addBooking = async (req, res) => {
  try {
    const newBooking = await bookingService.addBooking(req.body);
    sendSuccessResponse(res, 201, "Booking added successfully", newBooking);
  } catch (error) {
    console.error(`Failed to add booking: ${error.message}`);
    if (error.message.includes("Validation failed")) {
      sendErrorResponse(res, 400, "Invalid booking data", error.message);
    } else {
      sendErrorResponse(res, 500, "Failed to add booking", error.message);
    }
  }
};

const updateBooking = async (req, res) => {
  try {
    const updatedBooking = await bookingService.updateBooking(req.params.id,req.body);
    sendSuccessResponse(res,200,"Booking updated successfully",updatedBooking);
  } catch (error) {
    console.error(`Failed to update booking: ${error.message}`);
    if (error.message.includes("not found")) {
      sendErrorResponse(res, 404, "Booking not found", error.message);
    } else if (error.message.includes("Validation failed")) {
      sendErrorResponse(res, 400, "Invalid booking data", error.message);
    } else {
      sendErrorResponse(res, 500, "Failed to update booking", error.message);
    }
  }
};

const deleteBooking = async (req, res) => {
  try {
    await bookingService.deleteBooking(req.params.id);
    sendSuccessResponse(res, 200, "Booking deleted successfully");
  } catch (error) {
    if (error.message.includes("not found")) {
      sendErrorResponse(res, 404, "Booking not found", error.message);
    } else {
      console.error(`Failed to delete booking: ${error.message}`);
      sendErrorResponse(res, 500, "Failed to delete booking", error.message);
    }
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  addBooking,
  updateBooking,
  deleteBooking,
};

