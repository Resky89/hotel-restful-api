const dbConnection = require("../config/database");

const getAllBookings = async () => {
  const [rows] = await dbConnection.execute("SELECT * FROM booking");
  return rows;
};

const getBookingById = async (id) => {
  const [rows] = await dbConnection.execute(
    "SELECT * FROM booking WHERE id = ?",
    [id]
  );
  return rows[0] || null;
};

const addBooking = async (bookingData) => {
  const {
    guest_id,
    room_id,
    check_in_date,
    check_out_date,
    total_guests,
    status,
    total_price,
  } = bookingData;

  const [result] = await dbConnection.execute(
    "INSERT INTO booking (guest_id, room_id, check_in_date, check_out_date, total_guests, status, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      guest_id,
      room_id,
      check_in_date,
      check_out_date,
      total_guests,
      status,
      total_price,
    ]
  );

  return result.insertId;
};

const updateBooking = async (id, bookingData) => {
  const {
    guest_id,
    room_id,
    check_in_date,
    check_out_date,
    total_guests,
    status,
    total_price,
  } = bookingData;

  const [result] = await dbConnection.execute(
    "UPDATE booking SET guest_id = ?, room_id = ?, check_in_date = ?, check_out_date = ?, total_guests = ?, status = ?, total_price = ? WHERE id = ?",
    [
      guest_id,
      room_id,
      check_in_date,
      check_out_date,
      total_guests,
      status,
      total_price,
      id,
    ]
  );

  if (result.affectedRows > 0) {
    return await getBookingById(id);
  }
  return null;
};

const deleteBooking = async (id) => {
  const [result] = await dbConnection.execute(
    "DELETE FROM booking WHERE id = ?",
    [id]
  );
  return result.affectedRows > 0;
};

module.exports = {
  getAllBookings,
  getBookingById,
  addBooking,
  updateBooking,
  deleteBooking,
};

