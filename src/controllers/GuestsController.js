const { guestSchema } = require('../validations/GuestsValidation');
const guestService = require('../services/GuestsService');
const { sendSuccessResponse, sendErrorResponse } = require('../helpers/response');

const guestController = {
  // Get all guests
  async getAllGuests(req, res) {
    try {
      const guests = await guestService.getAllGuests();
      sendSuccessResponse(res, 200, 'Guests retrieved successfully', guests);
    } catch (error) {
      console.error('Error in getAllGuests:', error);
      sendErrorResponse(res, 500, 'Internal server error', error);
    }
  },

  // Get a single guest by ID
  async getGuestById(req, res) {
    try {
      const guest = await guestService.getGuestById(req.params.id);
      if (!guest) {
        return sendErrorResponse(res, 404, 'Guest not found');
      }
      sendSuccessResponse(res, 200, 'Guest retrieved successfully', guest);
    } catch (error) {
      console.error('Error in getGuestById:', error);
      sendErrorResponse(res, 500, 'Internal server error', error);
    }
  },

  // Create a new guest
  async createGuest(req, res) {
    try {
      const { error, value } = guestSchema.validate(req.body);
      if (error) {
        return sendErrorResponse(res, 400, error.details[0].message);
      }

      const newGuest = await guestService.createGuest(value);
      sendSuccessResponse(res, 201, 'Guest created successfully', newGuest);
    } catch (error) {
      console.error('Error in createGuest:', error);
      if (error.code === 'ER_DUP_ENTRY') {
        return sendErrorResponse(res, 400, 'Duplicate entry. This guest already exists.');
      }
      sendErrorResponse(res, 500, 'Internal server error', error);
    }
  },

  // Update an existing guest
  async updateGuest(req, res) {
    try {
      const { error, value } = guestSchema.validate(req.body, { stripUnknown: true });
      if (error) {
        return sendErrorResponse(res, 400, error.details[0].message);
      }

      const updatedGuest = await guestService.updateGuest(req.params.id, value);
      if (!updatedGuest) {
        return sendErrorResponse(res, 404, 'Guest not found');
      }
      sendSuccessResponse(res, 200, 'Guest updated successfully', updatedGuest);
    } catch (error) {
      console.error('Error in updateGuest:', error);
      if (error.code === 'ER_DUP_ENTRY') {
        return sendErrorResponse(res, 400, 'Duplicate entry. This data already exists for another guest.');
      }
      sendErrorResponse(res, 500, 'Internal server error', error);
    }
  },

  // Delete a guest
  async deleteGuest(req, res) {
    try {
      const result = await guestService.deleteGuest(req.params.id);
      if (!result) {
        return sendErrorResponse(res, 404, 'Guest not found');
      }
      sendSuccessResponse(res, 200, 'Guest deleted successfully');
    } catch (error) {
      console.error('Error in deleteGuest:', error);
      sendErrorResponse(res, 500, 'Internal server error', error);
    }
  },
};

module.exports = guestController;
