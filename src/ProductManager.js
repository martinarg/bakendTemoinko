import fs from "fs";

class ProductManager {
  constructor(path) {
    this.path = path;
  }
//agregar productos POST ok

async addProduct(product) {
  try {
    const data = await this.readFile();
    if (data) {
      this.products = JSON.parse(data);
    }
    product.id = this.products.length
      ? this.products.reduce(
          (max, product) => (product.id > max ? product.id : max),
          0
        ) + 1
      : 1;
    this.products.push(product);

    await this.writeFile(this.products);
    return product;
  } catch (err) {
    throw err;
  }
}
  //obtener productos ok
  async getProducts() {
    try {
      const data = await this.readFile(); // aca la recibimos como string
      this.products = JSON.parse(data); // aca la convertimos a json
      return this.products;
    } catch (err) {
      throw err;
    }
  }
// obtener el producto por id ok
  async getProductById(id) {
    try {
      let idC = parseFloat(id);
      const data = await this.readFile(); // aca la recibimos como string
       this.products = JSON.parse(data); // aca la convertimos a json
      const product = this.products.find((product) => product.id === idC);
      return product;
    } catch (err) {
      throw err;
    }
  }
//actualizar productos ok
  async updateProduct(id, product) {
    try {
      let idC = parseFloat(id);
      const data = await this.readFile();
      this.products = JSON.parse(data);
      const index = this.products.findIndex((product) => product.id === idC);
      this.products[index] = product;
      await this.writeFile(this.products);
      return product;
    } catch (err) {
      throw err;
    }
  }
  //borrar productos ok
  async deleteProduct(id) {
    try {
      let idC = parseFloat(id);
      const data = await this.readFile();
      this.products = JSON.parse(data);
      const index = this.products.findIndex((product) => product.id === idC);
      this.products.splice(index, 1);
      await this.writeFile(this.products);
    } catch (err) {
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

export default ProductManager;