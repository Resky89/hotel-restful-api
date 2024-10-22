// Memuat dotenv hanya jika NODE_ENV bukan 'production'
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Menggunakan variabel dari .env
const express = require('express');
const app = express();

// Menggunakan PORT dari .env
const PORT = process.env.PORT || 3000;


// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
