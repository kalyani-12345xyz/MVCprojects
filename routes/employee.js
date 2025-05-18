let express=require('express')
let router=express.Router()

let employeeController=require('../controllers/employee')

router.get('/',employeeController.allEmployee)

.get('/:id',employeeController.singleEmployee)

.post('/create',employeeController.createEmployee)

.delete('/:id',employeeController.deleteEmployee)

.patch('/:id',employeeController.updateEmployee)

module.exports=router

