import mongoCartsDao from "./mongo/class/carts.dao.js";
import mongoUsersDao from "./mongo/class/users.dao.js";
import { PERSISTENCE } from "../config/config.js";
import memoryCartsDao from "./memory/carts.dao.js";
import memoryUsersDao from "./memory/users.dao.js";
import mongoProductsDao from "./mongo/class/products.dao.js";
import memoryProductsDao from "./memory/products.dao.js";

export const CARTSDAO = PERSISTENCE
  ? new mongoCartsDao()
  : new memoryCartsDao();

export const USERSDAO = PERSISTENCE
  ? new mongoUsersDao()
  : new memoryUsersDao();

export const PRODUCTSDAO = PERSISTENCE
  ? new mongoProductsDao()
  : new memoryProductsDao();
