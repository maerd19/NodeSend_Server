const express = require("express");
const conectarDB = require("./config/db");

// Crear servidor
const app = express();

// Conectar a la BD's
conectarDB();

console.log("Comenzando NodeSend");

// Puerto de la app
const port = process.env.PORT || 4000;

// Arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
