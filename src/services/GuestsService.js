const Guest = require('../models/GuestsModel');

const guestService = {
  async getAllGuests() {
    return await Guest.findAll();
  },

  async getGuestById(id) {
    return await Guest.findById(id);
  },

  async createGuest(guestData) {
    return await Guest.create(guestData);
  },

  async updateGuest(id, guestData) {
    return await Guest.update(id, guestData);
  },

  async deleteGuest(id) {
    return await Guest.delete(id);
  },
};

module.exports = guestService;
