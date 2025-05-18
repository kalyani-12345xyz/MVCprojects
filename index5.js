let express=require('express')

let app=express()
app.use(express.json())

let recipes=require('./routes/recipes')
app.use('/',recipes)




app.listen(process.env.PORTR)