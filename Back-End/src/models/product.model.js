// import mongoose from "mongoose";

// const productModel = mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true,
//     trim:true
//   },
//   image: {
//     type: String,
//     required: true
//   },
//   // colors: {
//   //   type: [String],
//   //   required: true
//   // },
// });

// export const Product = mongoose.model("Product", productModel);
// backend/src/controllers/productController.js
import {
  CamisaMao,
  CamisaCorta,
  ChamarraMezclilla,
  ChamarraBiker,
} from "../../../front-end/src/assets/images";

export const Products = [
  {
    id: "1",
    name: "Camisa Manga Corta Mao Sólida",
    price: 299.0,
    colors: ["Negro", "Azul", "Gris"],
    imageUrl: CamisaMao,
  },
  {
    id: "2",
    name: "Chamarra Biker Manga Larga",
    price: 999.0,
    colors: ["Negro"],
    imageUrl: ChamarraBiker,
  },
  {
    id: "3",
    name: "Chamarra de Mezclilla",
    price: 679.0,
    colors: ["Azul"],
    imageUrl: ChamarraMezclilla,
  },
  {
    id: "4",
    name: "Camisa Manga Corta",
    price: 399.0,
    colors: ["Blanco", "Floral"],
    imageUrl: CamisaCorta,
  },
];
