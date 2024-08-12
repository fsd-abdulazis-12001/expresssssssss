module.exports.errorHandler = (err , req , res) =>{
    res.json({message: "error", error: err});
}