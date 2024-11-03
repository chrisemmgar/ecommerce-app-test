import mongoose from "mongoose";

const productModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    trim:true
  },
  image: {
    type: String,
    required: true
  },
  // colors: {
  //   type: [String],
  //   required: true
  // },
});

export const Product = mongoose.model("Product", productModel);
