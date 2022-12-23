import express from "express";
import path from "path";
import ProductManager from "./ProductManager.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const productManager = new ProductManager(
  path.resolve(process.cwd(), "public", "products.json")
);

app.get("/", (req, res) => {
  res.send("Vamos Argentina");
});
//con get obtenemos los productos
app.get("/productos", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const limit = req.query.limit;
    let limitedProducts;
    if (limit) {
      limitedProducts = products.slice(0, limit);
    }
    res.send(limitedProducts || products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//obtner por products ID 
app.get("/api/productos/:id", async (req, res) => {
    try {
    const idProduct = req.params.id;
    const producto = await productManager.getProductById(idProduct);
    res.send(producto);
    } catch (err) {
    res.status(500).send(err.message);
    }
  });

// creamo ruta con post 
app.post("/productos", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const newProduct = req.body;
    await productManager.addProduct(products, newProduct);
    res.send(newProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});



//iniciamos servidor
app.listen(port, () => {
  console.log(`Iniciado en http://localhost:${port}`);
});

