
const ProductosDaoMongo = require=('./productos/ProductosDaoMongoDb')
const CarritosDaoMongo = require=('./carritos/CarritosDaoMongo')

let carritosDao
let productosDao

process.env.PERS = 'firebase'

switch (process.env.PERS) {
    case 'mongodb':
        productosDao = new ProductosDaoMongo()
        carritosDao = new CarritosDaoMongo()
        break    
}

// export { productosDao, carritosDao }

module.exports ={productosDao,carritosDao}