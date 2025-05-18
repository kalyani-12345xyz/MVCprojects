
let express=require('express')
let flowers=require('../models/flowers')

let allFlowers=async(req,res)=>{
    let data=await flowers.find()
    res.json(data)
}

let singleFlower=async(req,res)=>{
    let id=req.params.id
    let data=await flowers.find({id:+id})
    res.json(data)
}

let createFlower=async(req,res)=>{
    let data=await flowers.insertOne(req.body)
    res.json(data)
}

let deleteFlower=async(req,res)=>{
    let id=req.params.id
    let data=await flowers.deleteOne({id:+id})
    res.json(data)
}

let updateFlower=async(req,res)=>{
    let id=req.params.id
    let data=await flowers.updateOne({id:+id},{$set:req.body})
    res.json(data)
}
module.exports={allFlowers,singleFlower,createFlower,deleteFlower,updateFlower}

