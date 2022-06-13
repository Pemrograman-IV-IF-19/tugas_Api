const express = require("express")
const app = express()
const port = 8081
const mongoose = require('mongoose')
const dbconfig = require('./config/Dbcofig')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(dbconfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connect mongodb")
}).catch(err => {
    console.log(err)
})

app.use('/users', require("./routes/userRoutes"))
app.use('/kategori', require("./routes/kategoriroutes"))


app.listen(port, () => {
    console.log("Server Berjalan di Port " + port)
})