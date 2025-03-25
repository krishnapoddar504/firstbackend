const express = require("express");
const myrout = require("./routes/route");
const cors = require("cors");
require("dotenv").config();
const myapp = express();
const port = process.env.PORTNO || 4500;
require("./dbConnection/db");

myapp.use(express.json());
myapp.use(cors());
myapp.use(myrout);

myapp.listen(port, () => {
  console.log(`Server Listing on the port: ${port}`);
});
