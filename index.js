const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()


app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get("/",(req, res) =>{
    res.json({message: "Hello Express!" })
})

// DB MongoAtlas Create account 
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose
    .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.ckjaqjh.mongodb.net/`
    )
.then(() => {
    console.log("conectamos ao MONGODB!")
    app.listen(3000)
})
.catch((err) => console.log(err))
