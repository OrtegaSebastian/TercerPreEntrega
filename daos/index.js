let carritosDao;
let productosDao;
// TODO: PERS no es mongodb, por lo tanto no regresa nada
switch (process.env.PERS) {
  case "mongoDB":
  // TODO: agregue default como fallback, revisar el uso de env
  default:
    // TODO: en commonjs no hace falta utilizar el default, solo en es6
    const ProductosDaoMongoDb = require("./productos/ProductosDaoMongoDb.js");
    // TODO: mal nombre del archivo. verificar
    const CarritosDaoMongoDb = require("./carritos/CarritosDaoMongo.js");

    productosDao = new ProductosDaoMongoDb();
    carritosDao = new CarritosDaoMongoDb();
    break;
}

// TODO: productosDao y el otro dao no se encuentran definidos, revisar
module.exports = { productosDao, carritosDao };
