let mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGOOSE_URLP)

let productSchema=new mongoose.Schema({
    id:Number,
    product_name:String,
    price:Number,
    category:String

})
module.exports=new mongoose.model('products',productSchema)