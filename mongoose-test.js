const mongoose = require ('mongoose')

const uri = "mongodb+srv://shubham123:Shubham%40123@cluster0.h7gwfdc.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri)
.then(()=>{
    console.log("connection established")
})