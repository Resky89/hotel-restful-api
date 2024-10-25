const roomsServices = require('../services/roomsService');
const { validateRoom } = require('../validations/roomsValidation');
const { sendSuccessResponse, sendErrorResponse } = require('../helpers/response');

const getAllRooms = async (req, res) => {
  try {
    const rooms = await roomsServices.getAllRooms();
    sendSuccessResponse(res, 200, 'Data ruangan berhasil diambil', rooms);
  } catch (error) {
    console.error('Error dalam getAllRooms:', error);
    sendErrorResponse(res, 500, 'Terjadi kesalahan saat mengambil data ruangan', error.message);
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await roomsServices.getRoomById(req.params.id);
    if (!room) {
      return sendErrorResponse(res, 404, 'Ruangan tidak ditemukan');
    }
    sendSuccessResponse(res, 200, 'Data ruangan berhasil diambil', room);
  } catch (error) {
    sendErrorResponse(res, 500, 'Terjadi kesalahan saat mengambil data ruangan', error.message);
  }
};

const createRoom = async (req, res) => {
  try {
    const { error } = validateRoom(req.body);
    if (error) {
      return sendErrorResponse(res, 400, error.details[0].message);
    }

    const savedRoom = await roomsServices.createRoom(req.body);
    sendSuccessResponse(res, 201, 'Ruangan baru berhasil dibuat', savedRoom);
  } catch (error) {
    sendErrorResponse(res, 400, 'Gagal membuat ruangan baru', error.message);
  }
};

const updateRoom = async (req, res) => {
  try {
    const { error } = validateRoom(req.body);
    if (error) {
      return sendErrorResponse(res, 400, error.details[0].message);
    }

    const updatedRoom = await roomsServices.updateRoom(req.params.id, req.body);
    if (!updatedRoom) {
      return sendErrorResponse(res, 404, 'Ruangan tidak ditemukan');
    }
    sendSuccessResponse(res, 200, 'Ruangan berhasil diperbarui', updatedRoom);
  } catch (error) {
    sendErrorResponse(res, 400, 'Gagal memperbarui ruangan', error.message);
  }
};

const deleteRoom = async (req, res) => {
  try {
    const result = await roomsServices.deleteRoom(req.params.id);
    if (!result) {
      return sendErrorResponse(res, 404, 'Ruangan tidak ditemukan');
    }
    sendSuccessResponse(res, 200, 'Ruangan berhasil dihapus');
  } catch (error) {
    sendErrorResponse(res, 500, 'Gagal menghapus ruangan', error.message);
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
