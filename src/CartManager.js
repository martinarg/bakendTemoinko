import fs from "fs";

class CartManager {
    constructor(path) {
      this.path = path;
    }

    //add cart 
    async addCart(cart) {
        try {
          const data = await this.readFile();
          if (data) {
            this.carts = JSON.parse(data);
          }
          cart.id = this.carts.length
            ? this.carts.reduce(
                (max, cart) => (cart.id > max ? cart.id : max),
                0
              ) + 1
            : 1;
          this.carts.push(cart);
      
          await this.writeFile(this.carts);
          return cart;
        } catch (err) {
          throw err;
        }
      }

      async getCartById(idcart){
        try{
        let idCartC = parseFloat(idcart);
        const carts = await this.readFile(); // aca la recibimos como string
        this.cartsb = JSON.parse(carts); 
        const cartsF = this.cartsb.find((cart) => cart.id === idCartC);
        return cartsF
        }catch (err) {
        throw err;
      }
      };

      async addProductCart(idcart, idproduct){
        try{
            let idCartC = parseFloat(idcart);
            let idproductC = parseFloat(idproduct);
            const carts = await this.readFile(); // aca la recibimos como string
            const cartsb = JSON.parse(carts); 
            const cart = cartsb.find((cart) => cart.id === idCartC)
            if(!cart){
            
                return("carrito no encontrado")
            }
            const isInCart= cart.products.find((product) => product.id === idproductC);
            if(isInCart){
                isInCart.quantity++;
                await this.writeFile(cartsb);
              
                return("Producto agregado al carrito adicionado");

            }else{
                cart.products.push({ id: pid, quantity: 1 });
                await this.writeFile(cartsb);
                return("Producto agregado al carrito");
                
            }
        }
        catch(err){
            throw err;
        }
      }

      //para leer el archivo
    async readFile() {
        return new Promise((resolve, reject) => {
        fs.readFile(this.path, "utf-8", (err, data) => {
            if (err) {
            reject(err);
            } else {
            resolve(data);
            }
        });
        });
    }

  async writeFile(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.path, JSON.stringify(data, null, "\t"), (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }

}

export default CartManager;