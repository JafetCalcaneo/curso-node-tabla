const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, list = false, x = 10) => {
    try {
        let salida = '';
    
        for (let i = 0; i <= x; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(list) console.log(salida);
        
        fs.writeFileSync(`./salida/tabla-${base}.text`, salida);
        return`Tabla del ${base}`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo,
}