let mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URLM)

let movieSchema=new mongoose.Schema({
    id:Number,
    name:String,
    release:String,
    director_name:String

    
})
module.exports=new mongoose.model('movies',movieSchema)