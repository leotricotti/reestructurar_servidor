import { PRODUCTSDAO } from "../dao/index.dao.js";

// Método asyncrono para obtener todos los productos
async function getAll(req, res) {
  const { page, sort, category } = req.query;
  try {
    if (category) {
      let filteredProducts = await PRODUCTSDAO.filteredProducts(category);
      res.json({
        products: filteredProducts.docs,
      });
    } else if (sort) {
      let orderedProducts = await PRODUCTSDAO.orderedProducts(sort);
      res.json({
        products: orderedProducts,
      });
    } else {
      let paginatedProducts = await PRODUCTSDAO.paginatedProducts(page);
      res.json({
        products: paginatedProducts.docs,
      });
    }
  } catch (err) {
    res.json({
      message: "Error al obtener los productos.",
      data: err,
    });
  }
}

// Método asyncrono para obtener un producto
async function getOne(req, res) {
  const { pid } = req.params;
  try {
    const product = await PRODUCTSDAO.getOne(pid);
    if (product) {
      res.json({
        products: tempArray,
        styles: "products.styles.css",
      });
    } else {
      res.status(404).json({
        message: "Producto no encontrado",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error al obtener el producto",
      data: err,
    });
  }
}

//Ruta que realiza el logout
async function logout(req, res) {
  try {
    const logout = req.session.destroy();
    if (logout) {
      res.redirect("/");
    } else {
      res.status(401).json({
        respuesta: "Algo salió mal. No hemos podido cerrar la sesión",
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export { getAll, getOne, logout };
