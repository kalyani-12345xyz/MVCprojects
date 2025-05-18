let employee=require('../models/employee')


let allEmployee=async(req,res)=>{
    let data=await employee.find()
    res.json(data)

}
let singleEmployee=async(req,res)=>{
    let id=req.params.id
    let data=await employee.find({id:+id})
    res.json(data)
}
let createEmployee=async(req,res)=>{
    let data=await employee.insertOne(req.body)
    res.json(data)
}

let deleteEmployee=async(req,res)=>{
    let id=req.params.id
    let data=await employee.deleteOne({id:+id})
    res.json(data)
}
let updateEmployee=async(req,res)=>{
    let id=req.params.id
    let data=await employee.updateOne({id:+id},{$set:req.body})
    res.json(data)

}

module.exports={allEmployee,singleEmployee,createEmployee,deleteEmployee,updateEmployee}
