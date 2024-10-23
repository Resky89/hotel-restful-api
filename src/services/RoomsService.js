const Room = require('../models/roomsModel');

const getAllRooms = async () => {
  try {
    return await Room.findAll();
  } catch (error) {
    console.error('Error dalam roomsServices.getAllRooms:', error);
    throw error;
  }
};

const getRoomById = async (id) => {
  try {
    return await Room.findById(id);
  } catch (error) {
    console.error('Error dalam roomsServices.getRoomById:', error);
    throw error;
  }
};

const createRoom = async (roomData) => {
  try {
    return await Room.create(roomData);
  } catch (error) {
    console.error('Error dalam roomsServices.createRoom:', error);
    throw error;
  }
};

const updateRoom = async (id, roomData) => {
  try {
    return await Room.update(id, roomData);
  } catch (error) {
    console.error('Error dalam roomsServices.updateRoom:', error);
    throw error;
  }
};

const deleteRoom = async (id) => {
  try {
    return await Room.delete(id);
  } catch (error) {
    console.error('Error dalam roomsServices.deleteRoom:', error);
    throw error;
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};

