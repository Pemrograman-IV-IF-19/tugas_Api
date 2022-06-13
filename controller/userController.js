const userModel = require('../model/userModel')

const bCrypt = require('bcrypt')



exports.registrasiUser = (data) => 
new Promise(async (resolve, reject) => {
    const salt = bCrypt.genSaltSync(10)
    const encript = bCrypt.hashSync(data.password, salt)
    Object.assign(data,{
        password: encript
    })
    await userModel.findOne({
    username: data.username
        }).then(async (dataUser) => {
            console.log(dataUser)
            if (dataUser) {
                status: false
                msg: "Gagal Registrasi, Username sudah terdaftar"
            } else {    
                await userModel.create(data)
                userModel.create(data)
                .then(() => {
                    console.log("berhasil")
                    resolve({
                        status: true,
                        msg: "Berhasil Registrasi"
                    })
                }).catch(err => {
                    reject({
                        status: false,
                        msg: "Gagal Registrasi"
                    })
                })
            }
        })
})

exports.loginUser = (data) =>
    new Promise(async (resolve, reject) => {
        await userModel.findOne({
            username: data.username
        }).then(async (dataUser) => {
            if (dataUser) {
                if (await bCrypt.compare(data.password, dataUser.password)) {
                    resolve({
                        status: true,
                        msg: "Berhasil Login",
                        data: dataUser
                    })
                } else {
                    reject({
                        status: false,
                        msg: "Password Anda Salah"
                    })
                }
            } else {
                reject({
                    status: false,
                    msg: "Username Tidak Terdaftar"
                })
            }
        })
    })