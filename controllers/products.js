let express=require('express')

let products=require('../models/products')

let allProducts=async(req,res)=>{
    let data=await products.find()
    res.json(data)

}
let singleProduct=async(req,res)=>{
    let id=req.params.id
    let data=await products.find({id:+id})
    res.json(data)
}
let createProduct=async(req,res)=>{
    let data=await products.insertOne(req.body)
    res.json(data)
}
let deleteProduct=async(req,res)=>{
    let id=req.params.id
    let data=await products.deleteOne({id:+id})
    res.json(data)
}
let updateProduct=async(req,res)=>{
    let id=req.params.id
    let data=await products.updateOne({id:+id},{$set:req.body})
    res.json(data)
}
module.exports={allProducts,singleProduct,createProduct,deleteProduct,updateProduct}