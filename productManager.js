const fs = require("fs");

class ProductManager {
  constructor(path, productos) {
    this.path = path;
    this.productos = [];
  }
  //agregar productos por promesas con FS
  agregarProducto(producto) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          if (data) {
            this.productos = JSON.parse(data);
          }
          this.productos.push(producto);
          fs.writeFile(
            this.path,
            JSON.stringify(this.productos, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }

  //agregar productos por promesas con FS
  obtenerProductos() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.productos = JSON.parse(data);
          resolve(this.productos);
        }
      });
    });
  }

  obtenerProductoPorId(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.productos = JSON.parse(data);
          const producto = this.productos.find((producto) => producto.id === id);
          resolve(producto);
        }
      });
    });
  }

  actualizarProducto(id, producto) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.productos = JSON.parse(data);
          const index = this.productos.findIndex((producto) => producto.id === id);
          this.productos[index] = producto;
          fs.writeFile(
            this.path,
            JSON.stringify(this.productos, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }

  borrarProducto(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.productos = JSON.parse(data);
          const index = this.productos.findIndex((producto) => product.id === id);
          this.productos.splice(index, 1);
          fs.writeFile(
            this.path,
            JSON.stringify(this.productos, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }
}
console.log(ProductManager);
module.exports = ProductManager;