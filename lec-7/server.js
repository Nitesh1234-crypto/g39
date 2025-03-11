const express = require("express");
const app = express();
app.use(express.json());  //this will parse json data
app.use(express.urlencoded({extended:true})); //this will parse urlencoded data
//create


app.use("/api/users",require("./routes/users"))
app.use("/api/blog",require("./routes/blogs"))
app.use("/api/auth",require("./routes/auth"))





app.listen(4565,()=>{
    console.log("server start")
})