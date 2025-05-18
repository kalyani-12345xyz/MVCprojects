let express=require('express')

let movies=require('../models/movie')

let allMovie=async(req,res)=>{
    let data=await movies.find()
    res.json(data)
}

let singleMovie=async(req,res)=>{
    let id=req.params.id
    let data=await movies.find({id:+id})
    res.json(data)
}

let createMovie=async(req,res)=>{
    let data=await movies.insertOne(req.body)
    res.json(data)
}

let deleteMovie=async(req,res)=>{
    let id=req.params.id
    let data=await movies.deleteOne({id:+id})
    res.json(data)
}

let updateMovie=async(req,res)=>{
    let id=req.params.id
    let data=await movies.updateOne({id:+id},{$set:req.body})
    res.json(data)
}
module.exports={allMovie,singleMovie,createMovie,deleteMovie,updateMovie}