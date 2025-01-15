# Hotel Restful API

Selamat datang di repositori Hotel Restful API! Proyek ini bertujuan untuk menyediakan API RESTful untuk mengelola data hotel, termasuk reservasi, kamar, dan pelanggan.

Welcome to the Hotel Restful API repository! This project aims to provide a RESTful API for managing hotel data, including reservations, rooms, and customers.

## 📚 Daftar Isi / Table of Contents

- [Pengenalan / Introduction](#pengenalan--introduction)
- [Fitur / Features](#fitur--features)
- [Teknologi / Technologies](#teknologi--technologies)
- [Instalasi / Installation](#instalasi--installation)
- [Penggunaan / Usage](#penggunaan--usage)
- [API Endpoints](#api-endpoints)

## 📖 Pengenalan / Introduction

Hotel Restful API adalah API yang dirancang untuk mengelola data hotel, termasuk reservasi, kamar, dan pelanggan. API ini dibangun menggunakan JavaScript dan mengikuti arsitektur RESTful.

Hotel Restful API is an API designed to manage hotel data, including reservations, rooms, and customers. This API is built using JavaScript and follows the RESTful architecture.

## ✨ Fitur / Features

- CRUD Operasi untuk Reservasi
- CRUD Operasi untuk Kamar
- CRUD Operasi untuk Pelanggan
- Autentikasi dan Otorisasi

- CRUD Operations for Reservations
- CRUD Operations for Rooms
- CRUD Operations for Customers
- Authentication and Authorization

## 🛠️ Teknologi / Technologies

- **JavaScript**: 100%

## 🚀 Instalasi / Installation

Untuk memulai dengan Hotel Restful API, ikuti langkah-langkah berikut:

To get started with Hotel Restful API, follow these steps:

1. Clone repositori:
    ```sh
    git clone https://github.com/Resky89/hotel-restful-api.git
    cd hotel-restful-api
    ```

2. Instal dependensi:
    ```sh
    npm install
    ```

1. Clone the repository:
    ```sh
    git clone https://github.com/Resky89/hotel-restful-api.git
    cd hotel-restful-api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## 📖 Penggunaan / Usage

Setelah menginstal dependensi, Anda dapat menjalankan server menggunakan perintah berikut:

```sh
npm start
```

Once the dependencies are installed, you can start the server using the following command:

```sh
npm start
```

Server akan berjalan di `http://localhost:3000`.

The server will run at `http://localhost:3000`.

## API Endpoints

Berikut adalah beberapa endpoint utama yang tersedia di API ini:

Here are some of the main endpoints available in this API:

- **Reservasi / Reservations**
  - GET `/reservations`: Mendapatkan semua reservasi / Get all reservations
  - POST `/reservations`: Membuat reservasi baru / Create a new reservation
  - GET `/reservations/:id`: Mendapatkan reservasi berdasarkan ID / Get reservation by ID
  - PUT `/reservations/:id`: Memperbarui reservasi berdasarkan ID / Update reservation by ID
  - DELETE `/reservations/:id`: Menghapus reservasi berdasarkan ID / Delete reservation by ID

- **Kamar / Rooms**
  - GET `/rooms`: Mendapatkan semua kamar / Get all rooms
  - POST `/rooms`: Membuat kamar baru / Create a new room
  - GET `/rooms/:id`: Mendapatkan kamar berdasarkan ID / Get room by ID
  - PUT `/rooms/:id`: Memperbarui kamar berdasarkan ID / Update room by ID
  - DELETE `/rooms/:id`: Menghapus kamar berdasarkan ID / Delete room by ID

- **Pelanggan / Customers**
  - GET `/customers`: Mendapatkan semua pelanggan / Get all customers
  - POST `/customers`: Membuat pelanggan baru / Create a new customer
  - GET `/customers/:id`: Mendapatkan pelanggan berdasarkan ID / Get customer by ID
  - PUT `/customers/:id`: Memperbarui pelanggan berdasarkan ID / Update customer by ID
  - DELETE `/customers/:id`: Menghapus pelanggan berdasarkan ID / Delete customer by ID
