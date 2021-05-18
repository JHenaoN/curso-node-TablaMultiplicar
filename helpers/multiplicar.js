const fs = require('fs');
const colors = require('colors')

const creararchivo = async (base,listar,hasta) =>{
    try {
        
        
         
        let salida ='';
        for(var i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        };
        
        if (listar){
            console.clear();
            console.log('***********************')
            console.log(`Tabla Multiplicar del ${base}`.yellow)
            console.log('***********************')
            console.log(salida.green);
        }
        
        
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    
        return `Tabla-${base}.txt` 

    } catch (err) {
        throw err
    }
    

}

module.exports = { creararchivo }