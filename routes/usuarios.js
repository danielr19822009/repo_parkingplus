import { Router } from "express";
import usuarioController from "../controllers/usuarios.js";

const router = Router();

//  rutas fijas
router.get("/registrousuario", (req, res) => {
    res.render("registrousuario", { nombrePagina: "Registro de Usuario" });
});

router.post("/registrousuario", usuarioController.crearUsuario);

// 🟦 DESPUÉS rutas que NO causan conflictos
router.get("/", usuarioController.getUsuariosAll);

// 🟥 ÚLTIMO rutas dinámicas
router.get("/:id", usuarioController.getUsuarioOne);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.eliminarUsuario);

export default router;
