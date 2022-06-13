const router = require('express').Router()
const { response } = require("express")
const useController = require("../controller/userController")

router.post("/registrasi", (req, res) => {
    useController.registrasiUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router