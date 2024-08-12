const { json } = require("express");

module.exports.something = (req, res, next) => {
    if (req.url == "/something") {
       req.secretmessage = "hi from something1"
       res.json({message: "someth1ng x f0rsakeN"})
    }
    next();
    
}


module.exports.something2 = (req, res, next) => {
 
    if (req.url == "/something2") {
       res.json({message: "someth1ng x mindfreak"})
       return
    }
    if (req.secretmessage){
        console.log((req.secretmessage))
     
        return
    }
    next();
   
   
}