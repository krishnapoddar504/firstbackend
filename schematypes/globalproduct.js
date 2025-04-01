const mongoose = require("mongoose");

const ProductBasictype = new mongoose.Schema({
  id: {
    type: String,
  },
  image: {
    type: String,
  },
  company: {
    type: String,
  },
  item_name: {
    type: String,
  },
  original_price: {
    type: String,
  },
  current_price: {
    type: String,
  },
  discount_percentage: {
    type: String,
  },
  return_period: {
    type: String,
  },
  delivery_date: {
    type: String,
  },
  rating: {
    type: String,
  },
});

const productschimatype = mongoose.model("productdata", ProductBasictype);
module.exports = productschimatype;
