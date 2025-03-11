const express = require("express");
const router = express.Router();
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()
const {verifyToken} = require("../middleware/verify")
router.post("/",verifyToken,async(req,res)=>{
    const {title,content} = req.body;
    console.log(req.id)
    const newBlog = await prisma.blog.create({
        data:{
            title:title,
            content:content,
            userid: req.id
        }
    })
    res.json({message:"blog added successfully",
        data:newBlog
    })
})
// router.get("/",(req,res)=>{

// })
// router.get("/:id",(req,res)=>{

// })
// router.delete("/:id",(req,res)=>{

// })
// router.put("/:id",(req,res)=>{

// })


module.exports=router;
