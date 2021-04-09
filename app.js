const { crearArchivo } = require('./helpers/multlipicar-async');
const colors = require('colors');
const argv = require('./config/yargs')



console.clear();

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
    .catch(err => console.log(err));



// console.log(argv);

// console.log('base: yargs', argv.b, argv.l);

// Captura de de datos desde la consola utilizando "--argumento"
// const [ , ,arg3 = 'base=5' ] = process.argv;
// const [, base = 5 ] = arg3.split('=');

// const base = 5;