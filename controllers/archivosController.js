const multer = require("multer");
const shortid = require("shortid");
const fs = require("fs");

exports.subirArchivo = async (req, res, next) => {
  const configuracionMulter = {
    limits: { fileSize: req.usuario ? 1024 * 1024 * 10 : 1024 },
    storage: (fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, `${__dirname}/../uploads`);
      },
      filename: (req, file, cb) => {
        const extension = file.originalname.substring(
          file.originalname.lastIndexOf("."),
          file.originalname.length
        );
        cb(null, `${shortid.generate()}${extension}`);
      },
    })),
  };

  // El contenido de archivo vendra desde un form
  const upload = multer(configuracionMulter).single("archivo");

  // Se sube el archivo
  upload(req, res, async (error) => {
    console.log(req.file);

    if (!error) {
      // Si no hay errores se envia al usuario el nombre del archivo que se ha cargado
      res.json({ archivo: req.file.filename });
    } else {
      console.log(error);
      return next();
    }
  });
};

exports.eliminarArchivo = async (req, res) => {
  console.log(req.archivo);
  try {
    fs.unlinkSync(__dirname + `/../uploads/${req.archivo}`);
    console.log("Archivo eliminado");
  } catch (error) {
    console.log(error);
  }
};
