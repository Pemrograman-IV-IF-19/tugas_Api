const res = require('express/lib/response')
const controllerbarang = require('../controller/barangcontroller')
const router = require('express').Router()

router.post('/inputbarang' , (req, res) => {
    controllerbarang.inputbarang(req, body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/get-data', (req, res) => {
    controllerbarang.getAllbarang()
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.put('/update-barang/:id', (req, res) => {
    controllerbarang.updatebarang(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.delete('/delete-barang/:id', (req, res) => {
    controllerbarang.Deletebarang(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch(err => {

    })
})


module,exports = router