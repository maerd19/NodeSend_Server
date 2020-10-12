const express = require("express");
const router = express.Router();
const { nuevoEnlace } = require("./../controllers/enlacesController");
const { check } = require("express-validator");
const auth = require("./../middleware/auth");

router.post(
  "/",
  [
    check("nombre", "Sube un archivo").not().isEmpty(),
    check("nombre_original", "Sube un archivo").not().isEmpty(),
  ],
  auth,
  nuevoEnlace
);

module.exports = router;
