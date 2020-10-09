const express = require("express");
const router = express.Router();
const {
  autenticarUsuario,
  usuarioAutenticado,
} = require("./../controllers/authController");
const { check } = require("express-validator");
const auth = require("./../middleware/auth");

router.post(
  "/",
  [
    check("email", "Agrega un email valido").isEmail(),
    check("password", "El password no puede ir vacio").not().isEmpty(),
  ],
  autenticarUsuario
);

router.get("/", auth, usuarioAutenticado);

module.exports = router;
