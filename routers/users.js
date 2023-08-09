
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();


router.post(`/`, (req, res)=>{
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    })

    user.save().then((createdUser=>{
        res.status(201).json(createdUser)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success: false
        })
        
    })
    
})


module.exports = router;