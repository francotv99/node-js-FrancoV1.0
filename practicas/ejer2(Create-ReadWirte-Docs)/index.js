//Usando librerias de node una de estas es
//node OS
/*
const os = require('os'); 

console.log(os.platform());
console.log(os.release());
console.log('free men:', os.freemem(), 'bytes');
console.log('total men:', os.totalmem(),'bytes');*/

//Aqui hacemos la prueba de File system
//Est FS llama archivos como tambien los crea

const fs = require('fs');

/*fs.writeFile('./texto.txt','Linea uno', function(err){
            //crea archivo, escribe dentro del archivo, hace una funcion en el caso de error o mostrar algo
    if (err){
        console.log(err)
    }

    console.log('Archivo creado');


});*/ 

//Sirve para leer archivos

fs.readFile('./texto.txt',function(err,data){

    if (err){
        console.log(err);
    }

    console.log(data.toString());


})

console.log('Ultima linea de codigo');

