let express=require('express')

let router=express.Router()
let controllersR=require('../controllers/recipes')

router.get('/',controllersR.allRecipes)
.get('/:id',controllersR.singleRecipes)
.post('/create',controllersR.createRecipes)
.delete('/:id',controllersR.deleteRecipes)
.patch('/:id',controllersR.updateRecipes)

module.exports=router