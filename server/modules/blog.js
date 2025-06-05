const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    img: {
        type: String
    },
    mimetype: {
        type: String
    },
    imgname: {
        type: String
    },
    title: {
        type: String
    },
    para: {
        type: String
    }
})

const blog = mongoose.model('blog',blogSchema)

module.exports = blog
