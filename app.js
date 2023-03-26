const express = require('express')
const app = express()
const empRoutes = require('./api/routes/emp')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
require('dotenv').config()


// app.use((req,res)=>{
//     res.status(200).json({
//         msg:"this is just simple request"
//     })
// })

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))


app.use('/employee',empRoutes)


mongoose.connect(process.env.mongoConnection)

module.exports = app