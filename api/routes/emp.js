const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Emp = require('../model/emp')
const empController = require('../controller/Emp')

router.get('/',empController.getRecords)
// (req,res)=>{
//     res.status(200).json({
//         msg:"this is get request for employee"
//     })
// })

router.post('/',empController.createRecord)
// (req,res)=>{
    // console.log(req.body)
    // console.log(req.body.name)

    // const emp = {
    //     name:req.body.name,
    //     salary:req.body.salary
    // }

    // const e = req.body

//     const emp = new Emp({
//         _id : new mongoose.Types.ObjectId,
//         name:req.body.name,
//         salary:req.body.salary
//     })

//     emp.save()
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

//     res.status(200).json({
//         msg:"this is post reqest",
//         empolyee:emp
//     })
// })

router.get('/:empId',empController.getRecord)
// (req,res)=>{
//     res.status(200).json({
//         msg:"this is get for single employee"
//     })
// })

router.put('/:empId',empController.updateRecord)
// (req,res)=>{

//     const id = req.params.empId

//     res.status(200).json({
//         msg:"this is put request for employee",
//         id:id
//     })
// })
router.delete('/:empId',empController.deleteRecord)
// (req,res)=>{
//     res.status(200).json({
//         msg:"this is delete request for employee"
//     })
// })


module.exports = router