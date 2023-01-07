
const Config={
    fileSystem: {
        path: './DB'
    },
    mongoDB:{
        cnxStr: "mongodb://localhost/ecommerce",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    }
}
module.exports ={Config}