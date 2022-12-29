import  {Router} from "express";
import CartManager from "../CartManager.js";
import path from "path";
const cartManager= new CartManager(
    path.resolve(process.cwd(), "public", "carrito.json")
  )
const router = Router();
// API CARTS
    router.post("/", async (req, res)=>{
        try{
        const cartBody = req.body;
        let cartb = await cartManager.addCart(cartBody);
        res.send(cartb);
        }catch(err){
        res.status(404).send(err.message)    
        }
    });

  router.get("/:id", async (req, res)=>{
    try{
      const idCart = req.params.id;
      let cartB = await cartManager.getCartById(idCart);

      res.send(cartB);
      } catch (err) {
      res.status(404).send(err.message);
      }

    
  });

  router.post("/:cid/product/:pid", async (req, res)=>{
    try{
      const idCart= req.params.cid;
      const idProduct= req.params.pid;
      let addProductCartB = await cartManager.addProductCart(idCart, idProduct);
      
      res.send(addProductCartB);
    }catch(err){
      res.status(404).send(err.message);
    }
  })

  export default router;