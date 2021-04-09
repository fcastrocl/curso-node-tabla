const fs = require('fs');

const crearArchivo = (base = 5, callback) => {

    return new Promise((resolve, reject) => {

        console.clear();
        console.log('=======================');
        console.log(`   Tabla del ${base}   `);
        console.log('=======================');

        let salida = '';


        for (let i = 1; i <= 10; i++) {
            // console.log(`${base} X ${i} = ${base * i} `);
            salida += `${base} X ${i} = ${base * i}\n`;
        }

        console.log(salida);

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${base}.txt creado`);
        // })



        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);

    });

    // fs.writeFileSync(`tabla-${base}.txt`, salida);
    // console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearArchivo
}