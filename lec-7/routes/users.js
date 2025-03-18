const express = require("express");
const router = express.Router();
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()
const {sendMail} = require("../utils/mail");
console.log(sendMail);

router.post("/",async (req,res)=>{
    const {name ,email,password} = req.body;
    const newUser = await prisma.user.create({
        data: {
          name:name,
          email:email,
          password:password
        },
      })
      //token generate
      //save otp to database---> OTP,userid=newUser.id
     
      //send URL to mail
      //token--->userid
      let token=Math.floor(Math.random()*1000000)
      let userId=newUser.id;
      let newToken= await prisma.token.create({
        data:{
          token:token,
          userId:userId
        }
      })
      let URL=`http://localhost:4565/api/verify/${token}/${userId}`
      sendMail(email,URL);
    res.send("please click the link on your mail to verify!!")
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
router.delete("/:id",(req,res)=>{

})


module.exports=router