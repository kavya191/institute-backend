//import express
const express=require('express')
//import dotenv file
require('dotenv').config()
//import dbconnection.js
require('./db/dbconnection')
//import collection.js 
require('./models/collections')
//import routing.js
require('./routes/routing')

//create server using express
const server=express()

//import cors
const cors=require('cors')
const router = require('./routes/routing')

// json to js convertion
server.use(express.json())

//connect with frondend
server.use(cors())
server.use(router)


//port setting
const port = 3001 || process.env.port

//server running configuration
server.listen(port,()=>{
    console.log(`____server Started at Port Number ${port} ____________`);
})