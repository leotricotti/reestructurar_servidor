import mongoCartsDao from "./mongo/carts.dao.js";
import mongoUsersDao from "./mongo/users.dao.js";
import { PERSISTENCE } from "../config/config.js";
import memoryCartsDao from "./memory/carts.dao.js";
import memoryUsersDao from "./memory/users.dao.js";
import mongoProductsDao from "./mongo/products.dao.js";
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
