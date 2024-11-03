//Este archivo funcionará como encargado de arrancar todas las partes del Back
import app from "./app.js";
import { dbConnect } from "./db.js";

dbConnect();
app.listen(3000);
console.log("Server on port ", 3000);
