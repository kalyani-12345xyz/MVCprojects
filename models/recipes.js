let mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGOOSE_URLR)

let recipesSchema=new mongoose.Schema({
    id:Number,
    name:String,
    cuisine:String
})
module.exports=new mongoose.model('recipes',recipesSchema)
