const express = require("express");
const router = express.Router();
const connController = require("../controllers/conn-controller");

// Route untuk memeriksa koneksi database
router.get("/check-db", connController.connDB);

module.exports = router;
