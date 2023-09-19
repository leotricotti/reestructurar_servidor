import { USERSDAO } from "../dao/index.dao.js";

//Ruta que agrega el id del carrito al usuario
async function addCartIDToUser(req, res) {
  const { cartId } = req.body;
  const username = req.session.user.email;
  try {
    const user = await USERSDAO.getOne(username);
    const userId = user[0]._id;
    const cartExist = user[0].carts.find((cart) => cart == cartId);
    if (!cartExist) {
      user[0].carts.push(cartId);
      const respuesta = await USERSDAO.updateCart(userId, user[0]);
    } else {
      return false;
    }
  } catch (err) {
    res.status(500).json({
      message: "Error al agregar el carrito",
      data: err,
    });
  }
}

export default addCartIDToUser;
