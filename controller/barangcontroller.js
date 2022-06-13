const modelbarang = require('../model/barang')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputbarang =(data) =>
new Promise(async (resolve, reject) =>{
    await modelbarang.create(data)
        .then(() =>{
            resolve({
                status: true,
                msg: 'Berhasil Membuat Barang'
            })
        }).catch(err => {
            reject({
                status: false,
                masg: 'Terjadi Kesalagan pada Server'
            })
        })
})

exports.getAllbarang = () => 
    new Promise(async (resolve, reject) => {
        modelbarang.find({})
            .then(databarang => {
                if (databarang.lenght > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: databarang
                    })
                }else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data kategori'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

exports.getbarangById = (id) =>
    new Promise(async (resolve, reject) => {
        modelbarang.findOne({ _id: Object(id) })
            .then(databarang => {
                if (databarang) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: databarang
                    })
                }else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data kategori' + name
                    })
                }
    }).catch(err => {
        reject({
            status: false,
            msg: 'Terjadi Kesalahan pada server'
        })
    })
 })

 exports.Deletebarang = (id) =>
 new Promise(async (resolve, reject) => {
     modelbarang.deleteOne({ _id: ObjectId(id) })
        .then(() => {
            resolve({
                status: true,
                msg: 'Berhasil menghapus data'
            })
        }).catch(err => {
            reject({
            status: false,
            msg: 'Server tidak meresponse'
        })
     })
})