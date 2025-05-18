let express=require('express')
let controllerP=require('../controllers/movie')

let router=express.Router()

router.get('/',controllerP.allMovie)
.get('/:id',controllerP.singleMovie)
.post('/create',controllerP.createMovie)
.delete('/:id',controllerP.deleteMovie)
.patch('/:id',controllerP.updateMovie)

module.exports=router