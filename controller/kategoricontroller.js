const modelkategori =require('../model/kategori')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId


exports.inputkategori = (data) =>
  new Promise(async (resolve, reject) => {
    await modelkategori
      .create(data)
      .then(() => {
        resolve({
          status: true,
          msg: "Berhasil Membuat Kategori",
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Terjadi Kesalahan Pada Server",
        });
      });
  });

  exports.getAllkategori = () =>
  new Promise(async (resolve, reject) => {
    modelkategori
      .find({})
      .then((datakategori) => {
        if (datakategori.length > 0) {
          resolve({
            status: true,
            msg: "Berhasil memuat data",
            data: datakategori,
          });
        } else {
          reject({
            status: false,
            msg: "Tidak Ada Kategori",
          });
        }
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Terjadi Kesalahan pada Server",
        });
      });
  });

exports.getkategoriByName = (name) =>
  new Promise(async (resolve, reject) => {
    modelkategori
      .findOne({ namakategori: name })
      .then((datakategori) => {
        if (datakategori) {
          resolve({
            status: true,
            msg: "Berhasil memuat data",
            data: datakategori,
          });
        } else {
          reject({
            status: false,
            msg: "Tidak ada data kategori",
          });
        }
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Server tidak meresponse",
        });
      });
  });


exports.updatekategori = (id, data) =>
  new Promise(async (resolve, reject) => {
    modelkategori
      .updateOne({ _id: id }, data)
      .then(() => {
        resolve({
          status: true,
          msg: "Berhasil Merubah Data",
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Terjadi Kesalahan pada Data",
        });
      });
  });

  exports.updatekategori = (id, data) =>
  new Promise(async (resolve, reject) => {
      modelkategori,this.updateOne({_id: id}, data)
      .then(() => {
          resolve({
              status: true,
              msg: 'Berhasil Merubah Data'
          })
      }).catch(err => {
          reject({
              status: false,
              msg: 'Terjadi Kesalahan Pada Server'
          })
      })
  })