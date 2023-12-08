const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const app = require("./app")
// Modul untuk mengelola koneksi database

const port = process.env.PORT || 3000

// Mulai koneksi ke database
mongoose
  .connect(
    "mongodb+srv://arsel-ganteng:Duaribuempat2004@tours-admin.wclrue0.mongodb.net/express"
  )
  .then(async () => {
    console.log("DB sukses terkoneksi")

    // Jalankan aplikasi setelah koneksi database berhasil
    app.listen(port, () => {
      console.log(
        `App running on port ${port}...`
      )
    })
  })
  .catch((err) => console.error(err))
