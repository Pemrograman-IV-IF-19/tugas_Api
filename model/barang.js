const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const userModel = mongoose.Schema({
    namaBarang: {
        Types: String
    },
    harga: {
        types: Number
    },
    restok: {
        types: Number
    },
    idKategori: {
        types: ObjectId
    }
})

module.exports = mongoose.model('barang', userModel)