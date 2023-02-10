const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el número base a multiplicar',
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                }).option('l', {
                    alias: 'list',
                    type: 'boolean',
                    demandOption: false,
                    describe: 'Muestra la tabla multiplicada',
                    default: false,
                }).option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    describe: 'Hasta que numero se multiplicará',
                })
                .argv;

module.exports = argv;