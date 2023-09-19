export default class CartsDao {
  constructor() {
    this.carts = [];
  }
  // Método asyncrono para obtener todos los carritos
  getAll = async () => {
    try {
      return this.carts;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para obtener un carrito
  getOne = async (id) => {
    try {
      const cart = this.carts.find((cart) => cart._id === id);
      return cart;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para crear un carrito
  saveCart = async (cart) => {
    try {
      this.carts.push(cart);
      return cart;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para eliminar un producto del carrito
  updateCart = async (id, cart) => {
    try {
      const index = this.carts.findIndex((cart) => cart._id === id);
      this.carts[index] = cart;
      return cart;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // Método asyncrono para vaciar el carrito
  emptyCart = async (id, cart) => {
    try {
      const index = this.carts.findIndex((cart) => cart._id === id);
      this.carts[index] = cart;
      return cart;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
