const User= require('../models/user');

//@descption add a new user
//@path POST /api/user
//@access PUBLIC  

const addUser = (req,res)=>{    
 User.create(req.body)
.then((data)=>res.json(data))
.catch((err)=>{ 
console.log(err);
res.status(500).json({msg: 'something went wrong.'});
});
};

//@descption get all  users
//@path GET /api/user
//@access PUBLIC  


const getUsers = (req,res)=>{
    User.find()
.then((data)=>res.json(data))
.catch((err)=>{ 
console.log(err);
res.status(500).json({msg: 'something went wrong.'});
});
};

//@descption delete a user
//@path DELETE /api/user/:id
//@access PUBLIC  

const deleteUser = (req,res)=>{
    User.findByIdAndDelete({_id:req.params.id})
    .then((data)=>res.json(data))
.catch((err)=>{ 
console.log(err);
res.status(500).json({msg: 'something went wrong.'});
});
};

//@descption update a user
//@path PUT /api/user/:id
//@access PUBLIC  

const updateUser = (req,res)=>{
    User.findByIdAndUpdate(req.params.id , req.body , { new:true })
    User.findByIdAndDelete({_id:req.params.id})
 .then((data)=>res.json(data))
 .catch((err)=>{ 
console.log(err);
res.status(500).json({msg: 'something went wrong.'});
});
};

module.exports={addUser , getUsers , deleteUser , updateUser }