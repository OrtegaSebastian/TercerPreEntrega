const log4js = require('log4js')

log4js.configure({
    appenders: {
        consola: {
            type: 'console'
        },
        //declaracion del tipo
        errorFile: {
            type: 'file',
            filename: './logs/errors.log'
        },
        warnFile: {
            type: 'file',
            filename: './logs/warns.log'
        },
        chatFile: {
            type: 'file',
            filename: './logs/chat.log'
        },
        productosFile: {
            type: 'file',
            filename: './logs/productos.log'
        },
        //logger
        loggerError: {
            appender: 'errorFile',
            type: 'logLevelFilter',
            level: 'error'
        },
        loggerWarn: {
            appender: 'warnFile',
            type: 'logLevelFilter',
            level: 'warn'
        },
        loggerConsole: {
            appender: 'console',
            type: 'logLevelFilter',
            level: 'info'
        },
        chatConsole: {
            appender: 'console',
            type: 'logLevelFilter',
            level: 'info'
        },
        productosConsole: {
            appender: 'console',
            type: 'logLevelFilter',
            level: 'info'
        },

    },
    categories: {
        default: {
            appenders: ['loggerError', 'loggerWarn', 'loggerConsole','chatConsole','productosConsole'],
            level: 'all'
        }

    }

})

const loggerCarrito = log4js.getLogger('carritoConsole');
loggerCarrito.trace('carrito trace')
loggerCarrito.error('carrito error')
loggerCarrito.warn('carrito warn')
loggerCarrito.fatal('carrito fatal')

const loggerProd = log4js.getLogger('productosConsole');
loggerProd.trace('producto trace')
loggerProd.error('producto error')
loggerProd.warn('producto warn')
loggerProd.fatal('producto fatal')



const logger = log4js.getLogger();

//exporto para poder usarlo
module.exports = {
logger,loggerCarrito,loggerProd
}