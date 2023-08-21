const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');

router.get(`/`, async (req, res) =>{
    const userList = await User.find().select('nameOrEmail');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})

router.get('/:id', async(req,res)=>{
    const user = await User.findById(req.params.id).select('nameOrEmail');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
})

router.post('/', async (req,res)=>{
    try {
        let user = new User({
          nameOrEmail: req.body.nameOrEmail,
          passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
          cpasswordHash: bcrypt.hashSync(req.body.passwordHash, 10)
        });
        user = await user.save();
    
        if (!user)
          return res.status(400).send('The user cannot be created!');
    
        res.send(user);
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('An error occurred while creating the user.');
      } 
})

// router.put('/:id',async (req, res)=> {

//     const userExist = await User.findById(req.params.id);
//     let newPassword
//     if(req.body.password) {
//         newPassword = bcrypt.hashSync(req.body.password, 10)
//     } else {
//         newPassword = userExist.passwordHash;
//     }

//     const user = await User.findByIdAndUpdate(
//         req.params.id,
//         {
//             nameOrEmail: req.body.name,
//             passwordHash: bcrypt.hashSync(req.body.password, 10),
//             cpasswordHash: bcrypt.hashSync(req.body.password, 10),
//         },
//         { new: true}
//     )

//     if(!user)
//     return res.status(400).send('the user cannot be created!')

//     res.send(user);
// })

router.post('/login', async (req,res) => {
    const user = await User.findOne({nameOrEmail: req.body.nameOrEmail})
    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
       
        res.status(200).send('user is authorized') 
    } else {
        res.status(400).send('password is wrong!');
    }   
})


// router.post('/register', async (req,res)=>{
//     let user = new User({
//         nameOrEmail: req.body.name,
//         passwordHash: bcrypt.hashSync(req.body.password, 10),
//         cpasswordHash: bcrypt.hashSync(req.body.password, 10),
//     })
//     user = await user.save();

//     if(!user)
//     return res.status(400).send('the user cannot be created!')

//     res.send(user);
// })


// router.delete('/:id', (req, res)=>{
//     User.findByIdAndRemove(req.params.id).then(user =>{
//         if(user) {
//             return res.status(200).json({success: true, message: 'the user is deleted!'})
//         } else {
//             return res.status(404).json({success: false , message: "user not found!"})
//         }
//     }).catch(err=>{
//        return res.status(500).json({success: false, error: err}) 
//     })
// })

// router.get(`/get/count`, async (req, res) =>{
//     const userCount = await User.countDocuments((count) => count)

//     if(!userCount) {
//         res.status(500).json({success: false})
//     } 
//     res.send({
//         userCount: userCount
//     });
// })


module.exports =router;