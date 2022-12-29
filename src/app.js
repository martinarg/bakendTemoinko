import express from "express";
import path from "path";

import cartRouter from "./routes/cart.router.js";
import  productRouter from "./routes/product.router.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Vamos Argentina");
});
//con get obtenemos los productos con limite 
//don de poner /api/productos?limit=2


   //products
  app.use("/api/productos", productRouter);

  //cart
  app.use("/api/carts", cartRouter);

  


//iniciamos servidor
app.listen(port, () => {
  console.log(`Iniciado en http://localhost:${port}`);
});

