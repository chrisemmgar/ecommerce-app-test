//Este archivo se encargara de obtener todos los productos
import {Product} from "../models/product.model.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};
