const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://krishna504:Krishna0504@clustertest.kt3q9.mongodb.net/mydatabase"
    // "mongodb+srv://krishna504:Krishna0504@clustertest.kt3q9.mongodb.net/userdata"
  )
  .then((res) => {
    console.log("database connected");
  });
