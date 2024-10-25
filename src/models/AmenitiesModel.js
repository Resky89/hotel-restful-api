const connection = require('../config/database'); // Pastikan jalur ini sesuai

// Fungsi untuk menambahkan amenitas
async function addAmenity(amenity) {
    const [result] = await connection.execute('INSERT INTO amenities (name, description, price) VALUES (?, ?, ?)', [amenity.name, amenity.description, amenity.price]);
    
    
    return result.insertId;
}

// Fungsi untuk mendapatkan semua amenitas
async function getAllAmenities() {
    const [rows] = await connection.execute('SELECT * FROM amenities');
    return rows;
}

// Fungsi untuk mendapatkan amenitas berdasarkan ID
async function getAmenityById(id) {
    const [rows] = await connection.execute('SELECT * FROM amenities WHERE id = ?', [id]);
    return rows[0];
}

// Fungsi untuk memperbarui amenitas
async function updateAmenity(id, amenity) {
    const [result] = await connection.execute('UPDATE amenities SET name = ?, description = ?, price = ? WHERE id = ?', [amenity.name, amenity.description,amenity.price, id]);
    if (result.affectedRows > 0) {
        return await getAmenityById(id);
      }
      return null;
}

// Fungsi untuk menghapus amenitas
async function deleteAmenity(id) {
    await connection.execute('DELETE FROM amenities WHERE id = ?', [id]);
}

module.exports = {
    addAmenity,
    getAllAmenities,
    getAmenityById,
    updateAmenity,
    deleteAmenity
};
