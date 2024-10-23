const amenitiesService = require("../services/AmenitiesService"); // Pastikan jalur ini sesuai
const { validateAmenity } = require("../validations/AmenitiesValidation"); // Tambahkan import validasi

// Fungsi untuk mendapatkan semua amenitas
async function getAllAmenities(req, res) {
  try {
    const amenities = await amenitiesService.fetchAllAmenities();
    res.status(200).json(amenities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching amenities", error });
  }
}

// Fungsi untuk mendapatkan amenitas berdasarkan ID
async function getAmenityById(req, res) {
  const { id } = req.params;
  try {
    const amenity = await amenitiesService.fetchAmenityById(id);
    if (amenity) {
      res.status(200).json(amenity);
    } else {
      res.status(404).json({ message: "Amenity not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching amenity", error });
  }
}

// Fungsi untuk menambahkan amenitas
async function addAmenity(req, res) {
  const amenity = req.body;
  
  // Validasi amenitas
  const { error } = validateAmenity(amenity);
  if (error) {
    return res.status(400).json({ message: "Validation error", details: error.details });
  }

  try {
    const newAmenityId = await amenitiesService.createAmenity(amenity);
    res.status(201).json(newAmenityId);
  } catch (error) {
    res.status(500).json({ message: "Error adding amenity", error });
  }
}

// Fungsi untuk memperbarui amenitas
async function updateAmenity(req, res) {
  const { id } = req.params;
  const amenity = req.body;

  // Validasi amenitas
  const { error } = validateAmenity(amenity);
  if (error) {
    return res.status(400).json({ message: "Validation error", details: error.details });
  }

  try {
    await amenitiesService.modifyAmenity(id, amenity);
    res.status(200).json({ message: "Amenity updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating amenity", error });
  }
}

// Fungsi untuk menghapus amenitas
async function deleteAmenity(req, res) {
  const { id } = req.params;
  try {
    await amenitiesService.removeAmenity(id);
    res.status(200).json({ message: "Amenity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting amenity", error });
  }
}

module.exports = {
  getAllAmenities,
  getAmenityById,
  addAmenity,
  updateAmenity,
  deleteAmenity,
};

