let mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URLF)

let flowerSchema=new mongoose.Schema({
    id:Number,
    name:String,
    color:String,
    petalCount:Number
    
})
module.exports=new mongoose.model('flowers',flowerSchema)