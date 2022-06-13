const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    namalengkap: {
        type: String
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String
    }
})
module.exports = mongoose.model('user', userModel)