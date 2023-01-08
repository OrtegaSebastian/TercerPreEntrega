const { contenedorProductosMongo } = require("../../contenedores/mongoContain");

class DAOProdMongo extends contenedorProductosMongo {
  constructor() {
    // *super = padre/mongoProducto
    // TODO: string no es un tipo, String (notar case-sensitive) si es, mismo con number
    super("collectionProducto", {
      id: { type: String, require: true },
      nombre: { type: String, require: true },
      descripcion: { type: Number, require: true },
      codigo: { type: String, require: true },
      foto: { type: String, require: true },
      precio: { type: Number, require: true },
      stock: { type: Number, require: true },
      // TODO: revisar mongoose doc, para cambiar el timestamp
      //   TODO: timestamp: true,
    });
  }
}

// export default DAOProdMongo
// TODO: Exportar solamente el dao
module.exports = DAOProdMongo;
