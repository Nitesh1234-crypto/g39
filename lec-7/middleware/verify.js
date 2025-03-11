

const jwt=require("jsonwebtoken");

function verifyToken(req,res,next){
    // console.log(req.headers);
    let token = req.headers.authorization;
    if(!token) return res.send("please login")
    let decode = jwt.verify(token,"jaiho")
    if(!decode) return res.send("Invalid token")
    else{
            req.id=decode.id;
            next()
    }
    // console.log(decode)

}

module.exports.verifyToken=verifyToken