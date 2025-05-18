let express=require('express')
let app=express()

let employee=require('./routes/employee')
app.use(express.json())


app.use('/',employee)

app.listen(process.env.PORT)