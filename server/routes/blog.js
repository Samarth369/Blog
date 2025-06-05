const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const blog = require('../modules/blog')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

route.get( '/blog' ,async ( req , res ) => {
    const blogg = await blog.find({})    
    res.json(blogg)
})

route.post( '/createblog' , upload.single('file') , async ( req , res ) => {
    const { Heading , para } = req.body
    const { originalname , mimetype , buffer } = req.file

    await blog.create({
        img: buffer,
        mimetype: mimetype,
        imgname: originalname,
        title: Heading,
        para: para
    })
})


module.exports = route