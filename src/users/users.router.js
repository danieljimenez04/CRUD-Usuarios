//? Import Depedencies
const router=require('express').Router()

//? File imports
const userServices=require('./users.services')


//? Routes
router.get('/users',userServices.getAllUsers)
router.post('/users',userServices.postNewUser)
router.get('/users/:id',userServices.getUserById)
router.put('/users/:id',userServices.putUserById)
router.delete('/users/:id',userServices.deleteUserById)


module.exports=router