// Mocks para pruebas en el front
import {
  CamisaMao,
  CamisaCorta,
  ChamarraMezclilla,
  ChamarraBiker,
} from "../../public/images";


export const products = [
  {
    id: "1",
    name: "Camisa Manga Corta Mao Sólida",
    price: 299.0,
    colors: ["negro", "azul", "gris"],
    imageUrl: CamisaMao,
  },
  {
    id: "2",
    name: "Chamarra Biker Manga Larga",
    price: 999.0,
    colors: ["negro"],
    imageUrl: CamisaCorta,
  },
  {
    id: "3",
    name: "Chamarra De Mezclilla",
    price: 679.0,
    colors: ["azul"],
    imageUrl: ChamarraMezclilla,
  },
  {
    id: "4",
    name: "Camisa Manga Corta",
    price: 399.0,
    colors: ["blanco", "floral"],
    imageUrl: ChamarraBiker,
  },
];
