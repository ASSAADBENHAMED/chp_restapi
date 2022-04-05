const express=require('express');
const { addUser, getUsers, deleteUser, updateUser } = require('../controllers/usecontrollers');
const router=express.Router()

//POST:add a new user to the database 
router.post('/',addUser);
//GET: return all user 
router.get('/',getUsers);
//DELETE: remove a user by id 
router.delete('/:id',deleteUser);
//PUT:edit a user by id
router.put('/:id',updateUser);

module.exports=router;