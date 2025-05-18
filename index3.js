let express=require('express')
let app=express()

let movies=require('./routes/movie')
app.use(express.json())
app.use('/',movies)


app.listen(process.env.PORTM)