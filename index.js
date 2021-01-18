const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const keys = require('./configs/keys')

mongoose.connect(keys.mongo_uri)

const app = express()
app.use(bodyparser.json())
app.use(cors())

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client-side/build"))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client-side", "build", "index.html"))
    })
}

app.use('/announcements', require('./routes/announcement') )

app.get('/', (req,res) => {
    res.send({Project: "Mern Crud"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log("Server has been started")
})
