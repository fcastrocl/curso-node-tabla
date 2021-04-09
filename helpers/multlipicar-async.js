const fs = require('fs');

const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            // console.log(`${base} X ${i} = ${base * i} `);
            salida += `${base} ${ 'X'.green} ${i} ${ '='.red } ${base * i}\n`;
            consola +=  `${base} X ${i} = ${base * i}\n`;
        }

        if (listar) {

            console.log('======================='.green);
            console.log('     Tabla del:'.green, colors.blue(base));
            console.log('======================='.green);

            console.log(salida);
            
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${base}.txt creado`);
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;

    }
}

module.exports = {
    crearArchivo
}