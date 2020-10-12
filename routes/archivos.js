const express = require("express");
const router = express.Router();
const {
  subirArchivo,
  eliminarArchivo,
} = require("./../controllers/archivosController");
const auth = require("./../middleware/auth");

router.post("/", auth, subirArchivo);

router.delete("/:id", eliminarArchivo);

module.exports = router;
