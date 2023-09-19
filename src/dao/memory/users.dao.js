export default class UsersDao {
  constructor() {
    this.users = [];
  }

  // Método asyncrono para actualizar el carrito
  updateCart = async (id, user) => {
    try {
      const index = this.users.findIndex((user) => user._id === id);
      this.users[index] = user;
      return user;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
