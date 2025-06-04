const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const blog = require('../modules/blog')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

route.get( '/blog' , ( req , res ) => {
    res.json({
        res: blog
    })
})

route.post( '/createblog' , upload.single('file') ,async ( req , res ) => {
    console.log(req.file);
})


module.exports = route