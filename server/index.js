const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes/blog')

mongoose.connect("mongodb://127.0.0.1:27017/blog")

const app = express()
app.use(cors())
app.use(route)

app.listen(1000)


