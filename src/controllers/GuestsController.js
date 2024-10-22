const guestValidation = require('../validations/GuestsValidation');
const guestService = require('../services/GuestsService');

const guestController = {
  // Get all guests
  async getAllGuests(req, res) {
    try {
      const guests = await guestService.getAllGuests();
      res.status(200).json(guests);
    } catch (error) {
      console.error('Error in getAllGuests:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Get a single guest by ID
  async getGuestById(req, res) {
    try {
      const guest = await guestService.getGuestById(req.params.id);
      if (!guest) {
        return res.status(404).json({ message: 'Guest not found' });
      }
      res.status(200).json(guest);
    } catch (error) {
      console.error('Error in getGuestById:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Create a new guest
  async createGuest(req, res) {
    try {
      const { error, value } = guestValidation.createGuest.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const newGuest = await guestService.createGuest(value);
      res.status(201).json(newGuest);
    } catch (error) {
      console.error('Error in createGuest:', error);
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Duplicate entry. This guest already exists.' });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Update an existing guest
  async updateGuest(req, res) {
    try {
      const { error, value } = guestValidation.updateGuest.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const updatedGuest = await guestService.updateGuest(req.params.id, value);
      if (!updatedGuest) {
        return res.status(404).json({ message: 'Guest not found' });
      }
      res.status(200).json({ message: 'Guest updated successfully', guest: updatedGuest });
    } catch (error) {
      console.error('Error in updateGuest:', error);
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Duplicate entry. This data already exists for another guest.' });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Delete a guest
  async deleteGuest(req, res) {
    try {
      const result = await guestService.deleteGuest(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Guest not found' });
      }
      res.status(200).json({ message: 'Guest deleted successfully' });
    } catch (error) {
      console.error('Error in deleteGuest:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = guestController;
