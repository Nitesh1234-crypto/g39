const express = require("express");
const app = express();
app.use(express.json());  //this will parse json data
app.use(express.urlencoded({extended:true})); //this will parse urlencoded data
//create
app.post("/users",(req,res)=>{
    const {name ,email,password} = req.body;

})

// //read
// app.get()

// //update
// app.put()


// //delete
// app.delete()


app.listen(4565,()=>{
    console.log("server start")
})