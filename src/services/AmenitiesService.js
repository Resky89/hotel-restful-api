const amenitiesModel = require('../models/AmenitiesModel'); // Pastikan jalur ini sesuai

// Fungsi untuk menambahkan amenitas
async function createAmenity(amenity) {

    const newAmenityId =  await amenitiesModel.addAmenity(amenity);
    const newAmenity = await fetchAmenityById(newAmenityId)
    return newAmenity
}

// Fungsi untuk mendapatkan semua amenitas
async function fetchAllAmenities() {
    return await amenitiesModel.getAllAmenities();
}

// Fungsi untuk mendapatkan amenitas berdasarkan ID
async function fetchAmenityById(id) {
    return await amenitiesModel.getAmenityById(id);
}

// Fungsi untuk memperbarui amenitas
async function modifyAmenity(id, amenity) {
    await amenitiesModel.updateAmenity(id, amenity);
}

// Fungsi untuk menghapus amenitas
async function removeAmenity(id) {
    await amenitiesModel.deleteAmenity(id);
}

module.exports = {
    createAmenity,
    fetchAllAmenities,
    fetchAmenityById,
    modifyAmenity,
    removeAmenity
};

