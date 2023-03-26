const mongoose = require('mongoose')
const Emp = require('../model/emp')

exports.createRecord = async (req,res)=>{

    try{
        const emp = new Emp({
            _id: new mongoose.Types.ObjectId,
            name:req.body.name,
            salary:req.body.salary
        })

        const data = await emp.save()
        res.status(200).json({
            msg:"its working try-catch block ",
            emp:data
        })

    }catch(err){
        res.status(501).json({
            code:10,
            msg:"something is wrong ",
            err:err
        })
    }


}

exports.getRecords = async (req,res) =>{

    try{
        const data = await Emp.find()
        res.status(200).json({
        msg:"all records of emp",
        emp:data
        })

    }catch(err){
        res.status(501).json({
            code:10,
            msg:err
        })
    }
}

exports.getRecord = async (req,res) =>{

    try{
        const data = await Emp.findById(req.params.empId)
        res.status(200).json({
            msg:"its showing single record of empolyeee",
            emp:data
        })

    }catch(err){
        res.status(501).json({
            mess:"soemthimg went wrong",
            err:err
        })
    }
}

exports.updateRecord = async (req,res) =>{
    try{
        const data = await Emp.findByIdAndUpdate(req.params.empId,req.body)
        res.status(200).json({
            msg:"record update sucessfully",
            emp:data
        })

    }catch(err){
        res.status(501).json({
            msg:"seomrthing err",
            err:err
        })
    }
} 

exports.deleteRecord = async (req,res)=>{

    try{

        const data = await Emp.findByIdAndDelete(req.params.empId)
        res.status(200).json({
            msg:"deleed record successfully",
            emp:data
        })


    }catch(err){
        res.status(501).json({
            msg:"something went wrong",
            err:err
        })
    }
}