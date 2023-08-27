
const {Place} = require('../models/place');
const express = require('express');
const router = express.Router();

router.get(`/`,async (req, res)=>{
    const placeList = await Place.find();

    if(!placeList){
        res.status(500).json({success:false})
    }
    res.send(placeList);
})

router.post(`/`, (req, res)=>{
    const place = new Place({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    })

    place.save().then((createdPlace=>{
        res.status(201).json(createdPlace)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success: false
        })
        
    })
    
})


module.exports = router;