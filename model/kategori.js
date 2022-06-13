const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    namakategori: {
        type : String
    },
    keterangan: {
        type: String
    },
})

module.exports = mongoose.model('kategori', userModel)