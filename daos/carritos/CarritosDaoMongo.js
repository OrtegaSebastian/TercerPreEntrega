const {contenedorCarritoMongo}= require('../../contenedores/mongoContain') 


class DAOcarroMongo extends contenedorCarritoMongo{
    constructor(){
        // *super = padre/mongocarrito
        super("collecionCarrito",{
            nombre:{ type: String,required:true},
            descripcion:{type: String,required:true},
            codigo:{type: String,required:true},
            foto:{type: String,required:true},
            precio:{type: number,required:true},
            timestamp:true,
        })
    }

}
module.exports={DAOcarroMongo}
