import  {Router} from "express";
import ProductManager from "../ProductManager.js";
import path from "path";
const productManager= new ProductManager(
    path.resolve(process.cwd(), "public", "products.json")
  )



const productRouter = Router();

productRouter.get("/", async (req, res) => {
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
  
  // creamos ruta con post para agregar productos
  productRouter.post("/", async (req, res) => {
    try {
      //const products = await productManager.getProducts();
      const newProduct = req.body;
      const productb = await productManager.addProduct(newProduct);
      res.send(productb);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  //obtener por products ID 
  productRouter.get("/:id", async (req, res) => {
      try {
      const idProduct = req.params.id;
     
      let producto = await productManager.getProductById(idProduct);
  
      res.send(producto);
      } catch (err) {
      res.status(404).send(err.message);
      }
    });
  
    productRouter.delete("/:id", async (req, res) => {
      try{
      const idProduct = req.params.id;
      await productManager.deleteProduct(idProduct);
      res.send("se borro el producto del id numero: "+idProduct);
      }catch(err){
        res.status(404).send(err.message);
      }
  
    });
    
    // uopdate product
    productRouter.put("/:id", async (req, res) => {
      try{
      const idProduct = req.params.id;
      const productBody = req.body;
      let productb = await productManager.updateProduct(idProduct, productBody);
      res.send(productb);
      }catch(err){
        res.status(404).send(err.message);
      }
  
    });

export default productRouter;