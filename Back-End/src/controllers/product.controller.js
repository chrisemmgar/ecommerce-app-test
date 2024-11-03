//Este archivo se encargara de obtener todos los productos
import { Products } from "../models/product.model.js";

export const getProducts = (req, res) => {
  res.json(Products);
};