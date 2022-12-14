//importacion ProductManager
const ProductManager_External = require("./ProductManager");

//instanciar ProductManager
const ProductManager = new ProductManager_External("./products.json", []);


// productos asincronicos

const manageProductManager = async () => {
  // estos son agregados
  await ProductManager.agregarProducto({
    title: "CROSS FIELD FULL BLACK",
    description: "zapatilla de trail",
    price: 14099,
    thumbnail: "https://trophy.com.ar/imagenes/productos/jpg/imagenes/productos/anation/6104320/imagen1.jpg",
    code: "16000",
    stock: 5,
  });
  
  await ProductManager.agregarProducto({
    title: "ML574 NEGRO-GRIS-NARANJA",
    description: "zapatilla urbana",
    price: 33099,
    thumbnail: "https://trophy.com.ar/imagenes/productos/jpg/imagenes/productos/newbalance/ML574IL2/imagen1.jpg",
    code: "16001",
    stock: 3,
  });

  await ProductManager.agregarProducto({
    title: "PERFORMANCE RUNNING BLUE/YELLOW",
    description: "zapatilla de running",
    price: 15099,
    thumbnail: "https://trophy.com.ar/imagenes/productos/jpg/imagenes/productos/361/15721222116-NC7321/imagen1.jpg",
    code: "16002",
    stock: 8,
  });
  await ProductManager.agregarProducto({
    title: "ML574 GRIS NEGRO",
    description: "zapatilla urbana retro",
    price: 34099,
    thumbnail: "https://www.trophy.com.ar/imagenes/productos/jpg/imagenes/productos/newbalance/ML574EI2/imagen1.jpg",
    code: "3435353",
    stock: 8,
  });
  //  obtenemos todos los productos
  const productos = await ProductManager.obtenerProductos();
  console.log(productos);

  // obtenemosproductos por id
  const producto = await ProductManager.obtenerProductoPorId(2);
  console.log(producto);

// actualizamos productos
  await ProductManager.actualizarProducto(
    3,
    "JUMP BALL NEGRO",
    "Zapatillas de basquet",
    21399,
    "https://www.trophy.com.ar/imagenes/productos/webp/imagenes/productos/finders/1599-000/imagen1.webp",
    "16800",
    7
  );

  // borrar productos
  //await ProductManager.borrarProducto(1);
  const productos2 = await ProductManager.obtenerProductos();
  console.log("produts 2", productos2);
};

manageProductManager();