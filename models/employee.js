let mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URL)

let employeeSchema=new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String
})
module.exports=new mongoose.model('user1',employeeSchema)