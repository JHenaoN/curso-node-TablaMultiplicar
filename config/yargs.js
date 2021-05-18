const argv = require('yargs')
    .option('b',{
        alias:'base',
        demandOption: true,
        type:'number',
        describe: 'Es la base de la tabla de multiplicar'
    })  
    .option('l',{
        alias:'listar',
        default: false,
        type: 'boolean',
        describe: 'Especifica si se muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        default: 10,
        type: 'number',
        describe: 'Especifica hasta donde se quiere la tabla'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
        throw 'La base debe ser numerica'
        }else{
        return true
        }
    })
    .argv;

  module.exports = argv;