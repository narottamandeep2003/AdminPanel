const express=require("express")
const app=express()
const mongoose = require('mongoose');
const routerAuth = require("./Authentication");
const cookieParser=require("cookie-parser");
const routerManagement = require("./Management");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());
app.use(routerAuth)
app.use(routerManagement)
mongoose.connect('mongodb://127.0.0.1:27017/assignment').then(()=>{
    console.log("connected to database")
    app.listen(2000,()=>{
        console.log("server is running on port 2000")
    })
});