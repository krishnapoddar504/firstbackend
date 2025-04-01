const mongoose = require("mongoose");

const Basictype = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  pass: {
    type: String,
  },
});

const myschimatype = mongoose.model("basicdata", Basictype);
module.exports = myschimatype;
