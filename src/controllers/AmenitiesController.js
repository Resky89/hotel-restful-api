const amenitiesService = require("../services/AmenitiesService"); // Pastikan jalur ini sesuai
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../helpers/response");
// Fungsi untuk mendapatkan semua amenitas
async function getAllAmenities(req, res) {
  try {
    const amenities = await amenitiesService.fetchAllAmenities();
    sendSuccessResponse(res, 200, "Amenities fetched successfully", amenities);
  } catch (error) {
    sendErrorResponse(res, 500, "Failed to fetch amenities", error.message);
  }
}

// Fungsi untuk mendapatkan amenitas berdasarkan ID
async function getAmenityById(req, res) {
  const { id } = req.params;
  try {
    const amenity = await amenitiesService.fetchAmenityById(id);
    if (amenity) {
      sendSuccessResponse(res, 200, "Amenity fetched successfully", amenity);
    } else {
      sendErrorResponse(res, 404, "Amenity not found");
    }
  } catch (error) {
    sendErrorResponse(res, 500, "Failed to fetch amenity", error.message);
  }
}

// Fungsi untuk menambahkan amenitas
async function addAmenity(req, res) {
  const amenity = req.body;
  try {
    const newAmenityId = await amenitiesService.createAmenity(amenity);
    sendSuccessResponse(res, 201, "Amenity created successfully", newAmenityId);
  } catch (error) {
    sendErrorResponse(res, 500, "Failed to create amenity", error.message);
  }
}

// Fungsi untuk memperbarui amenitas
async function updateAmenity(req, res) {
  const { id } = req.params;
  const amenity = req.body;
  try {
   const amenities = await amenitiesService.modifyAmenity(id, amenity);
    sendSuccessResponse(res, 200, "Amenity update successfully", amenities);
  } catch (error) {
    sendErrorResponse(res, 500, "Error updating amenity", error.message);
  }
  }


// Fungsi untuk menghapus amenitas
async function deleteAmenity(req, res) {
  const { id } = req.params;
  try {
    await amenitiesService.removeAmenity(id);
    sendSuccessResponse(res, 200, "Amenity delete successfully");
  } catch (error) {
    sendErrorResponse(res, 500, "Error deleted amenity", error.message);
  }
}

module.exports = {
  getAllAmenities,
  getAmenityById,
  addAmenity,
  updateAmenity,
  deleteAmenity,
};
