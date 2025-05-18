let express=require('express')
let app=express()
let products=require('./routes/products')
app.use(express.json())

app.use('/',products)
app.listen(process.env.PORTP)