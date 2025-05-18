let express=require('express')

let routes=express.Router()

let controllerF=require('../controllers/flowers')

routes.get('/',controllerF.allFlowers)

.get('/:id',controllerF.singleFlower)

.post('/create',controllerF.createFlower)

.delete('/:id',controllerF.deleteFlower)

.patch('/:id',controllerF.updateFlower)

module.exports=routes