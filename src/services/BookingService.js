const bookingModel = require("../models/BookingsModel");
const { bookingSchema } = require("../validations/BookingsValidation");
const { formatBookingData } = require("../helpers/data-formatter");

const getAllBookings = async () => {
  try {
    const bookings = await bookingModel.getAllBookings();
    return bookings.map(formatBookingData);
  } catch (error) {
    throw new Error("Failed to fetch bookings: " + error.message);
  }
};


const getBookingById = async (id) => {
  try {
    const booking = await bookingModel.getBookingById(id);
    if (!booking) {
      throw new Error("Booking not found with ID: " + id);
    }
    return formatBookingData(booking);
  } catch (error) {
    throw new Error("Failed to fetch booking: " + error.message);
  }
};

const addBooking = async (bookingData) => {
  try {
    const { error, value } = bookingSchema.validate(bookingData, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message).join(", ");
      throw new Error(`Validation failed: ${errorMessages}`);
    }

    const newBookingId = await bookingModel.addBooking(value);
    const newBooking = await bookingModel.getBookingById(newBookingId);
    return formatBookingData(newBooking);
  } catch (error) {
    throw new Error("Failed to add booking: " + error.message);
  }
};

const updateBooking = async (id, bookingData) => {
  try {
    const { error, value } = bookingSchema.validate(bookingData, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = error.details
        .map((detail) => detail.message)
        .join(", ");
      throw new Error(`Validation failed: ${errorMessages}`);
    }

    const updatedBooking = await bookingModel.updateBooking(id, value);
    if (!updatedBooking) {
      throw new Error("Booking not found with ID: " + id);
    }
    return formatBookingData(updatedBooking);
  } catch (error) {
    throw new Error("Failed to update booking: " + error.message);
  }
};

const deleteBooking = async (id) => {
  try {
    const deletedBooking = await bookingModel.deleteBooking(id);
    if (!deletedBooking) {
      throw new Error("Booking not found with ID: " + id);
    }
    return deletedBooking;
  } catch (error) {
    throw new Error("Failed to delete booking: " + error.message);
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  addBooking,
  updateBooking,
  deleteBooking,
};
