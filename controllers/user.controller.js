
const { v4: uuidv4 } = require('uuid');

module.exports.getUsers = (req, res) => {
    res.json([{
        id: uuidv4(),
        message: "Hi!!!"
    }]); 
}