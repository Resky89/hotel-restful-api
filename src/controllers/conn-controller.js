const dbConnection = require("../config/database");

exports.connDB = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection(); // Menggunakan getConnection
    res.send("Hello, DB!");
    console.log("Berhasil terhubung ke database");
    connection.release(); // Melepaskan koneksi setelah digunakan
  } catch (err) {
    res.send("Sorry, DB!");
    console.error("Kesalahan koneksi ke database:", err);
  }
};
