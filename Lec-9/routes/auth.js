const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()
router.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let user= await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(!user) return res.send("User not found")
    if(user.password!=password) return res.send("Incorrect password");
    let token = jwt.sign(user,"jaiho");
    // console.log(token)
    // res.send("user logged in successfully")
    res.json({
        message:"login success",
        token:token
    })
})

module.exports=router;