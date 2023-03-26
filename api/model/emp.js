const mongoose = require('mongoose')

const Schema = mongoose.Schema

const empSchema = Schema({
    _id: Schema.Types.ObjectId,
    name:{type:String ,require:true},
    salary:{type:String ,require:true}
})

module.exports = mongoose.model("Emp",empSchema)