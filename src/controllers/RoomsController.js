const Room = require("../models/RoomsModel");
const roomsServices = require("../services/RoomsService");
const { validateRoom } = require("../validations/RoomsValidation");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await roomsServices.getAllRooms();
    res.json(rooms);
  } catch (error) {
    console.error("Error dalam getAllRooms:", error);
    res
      .status(500)
      .json({
        message: "Terjadi kesalahan saat mengambil data ruangan",
        error: error.message,
      });
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await roomsServices.getRoomById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Ruangan tidak ditemukan" });
    }
    res.json(room);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Terjadi kesalahan saat mengambil data ruangan",
        error: error.message,
      });
  }
};

const createRoom = async (req, res) => {
  try {
    const { error } = validateRoom(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const savedRoom = await roomsServices.createRoom(req.body);
    res.status(201).json(savedRoom);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal membuat ruangan baru", error: error.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const { error } = validateRoom(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const updatedRoom = await roomsServices.updateRoom(req.params.id, req.body);
    if (!updatedRoom) {
      return res.status(404).json({ message: "Ruangan tidak ditemukan" });
    }
    res.json(updatedRoom);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal memperbarui ruangan", error: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const result = await roomsServices.deleteRoom(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Ruangan tidak ditemukan" });
    }
    res.json({ message: "Ruangan berhasil dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal menghapus ruangan", error: error.message });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
