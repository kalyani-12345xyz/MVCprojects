let express=require('express')
let app=express()
let flowers=require('./routes/flowers')

app.use(express.json())
app.use('/',flowers)





app.listen(process.env.PORTF)