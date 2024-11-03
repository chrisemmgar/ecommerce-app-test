//App será utilizado para configurar todo el codigo de express
import express from "express";
import morgan from "morgan";
import router from "./routes/product.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(router);

export default app;
