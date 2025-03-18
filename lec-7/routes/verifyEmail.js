const express = require("express");
const router = express.Router();
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()
router.get("/:token/:userId",async(req,res)=>{
    let {token,userId} = req.params;
    let isToken= await prisma.token.findFirst({
        where:{
            token:token,
            userId:parseInt(userId)
        }
    }) 
    if(!isToken) return res.send("Invalid Link")
    
    let updateUser= await prisma.user.update({
        where:{
            id:parseInt(userId)
        },
        data:{
            isVerified:true
        }
    })
    res.send("mail is verify please Login")

})




module.exports=router