const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: false,
        describe: 'Indica hasta que número multiplicar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        if (isNaN(argv.h)) {
            throw 'El hasta debe ser un numero'
        }
        return true;
    })
    .argv;


module.exports = argv;