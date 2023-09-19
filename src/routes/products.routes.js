import { Router } from "express";
import { getAll, getOne, logout } from "../controllers/products.controller.js";

//Inicializar servicios
const router = Router();

// Método asyncrono para obtener todos los productos
router.get("/", getAll);

// Método asyncrono para obtener un producto
router.get("/:pid", getOne);

//Ruta que realiza el logout
router.get("/logout", logout);

export default router;
