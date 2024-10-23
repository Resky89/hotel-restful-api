const pool = require('../config/database');

const findAll = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM rooms');
    return rows;
  } catch (error) {
    console.error('Error dalam roomsModel.findAll:', error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM rooms WHERE id = ?', [id]);
    return rows[0] || null;
  } catch (error) {
    console.error('Error dalam roomsModel.findById:', error);
    throw error;
  }
};

const create = async (roomData) => {
  try {
    const { room_number, type, price, capacity, status } = roomData;
    const [result] = await pool.query(
      'INSERT INTO rooms (room_number, type, price, capacity, status) VALUES (?, ?, ?, ?, ?)',
      [room_number, type, price, capacity, status]
    );
    return { id: result.insertId, ...roomData };
  } catch (error) {
    console.error('Error dalam roomsModel.create:', error);
    throw error;
  }
};

const update = async (id, roomData) => {
  try {
    const { room_number, type, price, capacity, status } = roomData;
    const [result] = await pool.query(
      'UPDATE rooms SET room_number = ?, type = ?, price = ?, capacity = ?, status = ? WHERE id = ?',
      [room_number, type, price, capacity, status, id]
    );
    if (result.affectedRows === 0) {
      return null;
    }
    return { id, ...roomData };
  } catch (error) {
    console.error('Error dalam roomsModel.update:', error);
    throw error;
  }
};

const deleteRoom = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM rooms WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return null;
    }
    return { id };
  } catch (error) {
    console.error('Error dalam roomsModel.deleteRoom:', error);
    throw error;
  }
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  delete: deleteRoom
};

