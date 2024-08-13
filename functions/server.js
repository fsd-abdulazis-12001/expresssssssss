require("dotenv").config();
import ServerlessHttp from "serverless-http";
const { json } = require("express");
const express = require("express");
const app = express();
const router = require('../routers');

const { something,something2 } = require("../middlewares/something");
const { errorHandler } = require("../middlewares/errorHanlder");
const cors = require("cors");




app.use(cors());

// app.use([something, something2]);
app.use(express.json());
app.use("/api",router);
 

 


app.use("/", (req, res) => {
      res.status(404)
      res.send("Page Not found")
})


app.use(errorHandler)

// app.listen(process.env.PORT, () => {
//     console.log("Server running on port " + process.env.PORT);
// });
const handler = ServerlessHttp(app);
module.exports.handler = async (event, context) => {
    const result = await handler(event, context);
    return result;
}