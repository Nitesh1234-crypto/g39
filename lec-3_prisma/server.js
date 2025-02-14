const express = require("express");
const app = express();
app.use(express.json());  //this will parse json data
app.use(express.urlencoded({extended:true})); //this will parse urlencoded data
//create
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient()


app.post("/users",async (req,res)=>{
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
app.get("/users/:id",async(req,res)=>{
    const {id} = req.params;
    let user=await prisma.user.findUnique({
         where:{
            id:parseInt(id)
         }
    })
    res.send(user);

})

// //update
// app.put()


// //delete
// app.delete()



app.listen(4565,()=>{
    console.log("server start")
})