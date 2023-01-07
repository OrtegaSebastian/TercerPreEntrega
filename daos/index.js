
let carritosDao
let productosDao

switch (process.env.PERS) {
    
    case 'mongodb':
        const { default: ProductosDaoMongoDb } = require('./productos/ProductosDaoMongoDb.js')
        const { default: CarritosDaoMongoDb } =  require('./carritos/CarritosDaoMongoDb.js')

        productosDao = new ProductosDaoMongoDb()
        carritosDao = new CarritosDaoMongoDb()
        break
    
}

module.exports={ productosDao, carritosDao }