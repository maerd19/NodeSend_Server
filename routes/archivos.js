const express = require("express");
const router = express.Router();
const {
  subirArchivo,
  eliminarArchivo,
  descargar
} = require("./../controllers/archivosController");
const auth = require("./../middleware/auth");

router.post("/", auth, subirArchivo);

router.get("/:archivo", descargar, eliminarArchivo);

module.exports = router;
