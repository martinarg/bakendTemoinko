class productManager {
    constructor(){
        this.products=[];
    }
}

agregarProducto(title,description,price,thumbnail, code, stock)
{
    const producto ={
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };
    if(
        title === undefined ||
      description === undefined ||
      price === undefined ||
      thumbnail === undefined ||
      code === undefined ||
      stock === undefined
    ){
        return console.log("completar todos los campos");
    }
    let condition = this.products.find((producto)=>producto.code === code);

    if(condition){
        return condsole.log("el producto ya se encuentra");
    }else{
        this.products.push(producto);
    }
};

getProductById(id)
{
    let id = parseInt(id);
    let miProducto = null;
    this.products.forEach((producto)=>{
        if(producto.id ===id){
            miProducto = producto;
        }
    });
    if(miProducto === null){
        return console.log("no se encuentra el producto")
    } else{
        return miProducto;
    }
}



const productManager = new ProductManager();
productManager.agregarProducto(
    "CROSS FIELD FULL BLACK",
    "zapatilla de trail",
    14099,
    "https://trophy.com.ar/imagenes/productos/jpg/imagenes/productos/anation/6104320/imagen1.jpg",
    16000,
    5
    );
productManager.agregarProducto(
    "ML574 NEGRO-GRIS-NARANJA",
    "zapatilla urbna",
    33099,
    "https://trophy.com.ar/imagenes/productos/jpg/imagenes/productos/newbalance/ML574IL2/imagen1.jpg",
    16001,
    3
);
productManager.agregarProducto(
    "PERFORMANCE RUNNING BLUE/YELLOW",
    "zapatilla de running",
    15099,
    "https://trophy.com.ar/imagenes/productos/jpg/imagenes/productos/361/15721222116-NC7321/imagen1.jpg",
    16002,
    8

);

console.log(productManager.getProducts());

console.log("busqueda de producto", productManager.getProductById(1));