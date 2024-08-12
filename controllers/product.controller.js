 
const { v4: uuidv4 } = require('uuid');

module.exports.getProductFromID = (req, res) => {
    res.send("product id: " + req.params.id);
}