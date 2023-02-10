const { options, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear()
console.log(argv)
crearArchivo(argv.b, argv.l, argv.x)
.then(fileName => console.log(`Archivo ${fileName} creado`.rainbow))
.catch(console.log)

// const base = 3;
// let salida = '';

// fs.writeFile(`tabla-${base}.text`, salida, (err) => {
//     if(err) throw err;
//     console.log(`Tabla del ${base} construida`);
// })

// fs.writeFileSync(`tabla-${base}.text`, salida);
//     console.log(`Tabla del ${base} construida`);
