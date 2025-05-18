let express=require('express')
let controllerP=require('../controllers/products')

let router=express.Router()

router.get('/',controllerP.allProducts)

.get('/:id',controllerP.singleProduct)

.post('/create',controllerP.createProduct)

.delete('/:id',controllerP.deleteProduct)

.patch('/:id',controllerP.updateProduct)

module.exports=router