const express = require("express");
const router = express.Router();
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()


router.post("/",async (req,res)=>{
    const {name ,email,password} = req.body;
    const newUser = await prisma.user.create({
        data: {
          name:name,
          email:email,
          password:password
        },
      })
    res.send(newUser)
})

// //read
//read data of a specific user
router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    let user=await prisma.user.findUnique({
         where:{
            id:parseInt(id)
         }
    })
    res.send(user);

})

// //update
router.put("/",async(req,res)=>{
  let {name,email,password} = req.body;
  let {id} = req.query;
  const updateUser = await prisma.user.update({
    where: {
      id:parseInt(id),
    },
    data: {
      name: name,
      email:email,
      password:password
    },
  })
  res.send("user updated successfully!!!!")

})


module.exports=router