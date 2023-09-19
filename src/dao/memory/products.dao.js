export default class ProductsDao {
  // Método asyncrono para obtener todos los productos
  getAll = async () => {
    try {
      return this.products;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para obtener un producto
  getOne = async (id) => {
    try {
      const product = this.products.find((product) => product._id === id);
      return product;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para crear un producto
  saveProduct = async (product) => {
    try {
      this.products.push(product);
      return product;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para actualizar un producto
  updateProduct = async (id, product) => {
    try {
      const index = this.products.findIndex((product) => product._id === id);
      this.products[index] = product;
      return product;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para eliminar un producto
  deleteProduct = async (id) => {
    try {
      const index = this.products.findIndex((product) => product._id === id);
      this.products.splice(index, 1);
      return id;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
