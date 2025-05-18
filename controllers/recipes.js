let express=require('express')

let recipes=require('../models/recipes')

let allRecipes=async(req,res)=>{
    let data=await recipes.find()
    res.json(data)
}
let singleRecipes=async(req,res)=>{
    let id=req.params.id
    let data=await recipes.find({id:+id})
    res.json(data)
}
let createRecipes=async(req,res)=>{
    let data=await recipes.insertOne(req.body)
    res.json(data)
}
let deleteRecipes=async(req,res)=>{
    let id=req.params.id
    let data=await recipes.deleteOne({id:+id})
    res.json(data)
}
let updateRecipes=async(req,res)=>{
    let id=req.params.id
    let data=await recipes.updateOne({id:+id},{$set:req.body})
    res.json(data)
}
module.exports={allRecipes,singleRecipes,createRecipes,deleteRecipes,updateRecipes}