
//Http comucnicacion entre servidor
//resibe
const http=require('http');

const colors=require('colors');

const handleserver=function(req,res)
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo</h1>');
    //res.writeHead(200,{'Content-type':'text/plain'});
    //res.write('Hola mundo');
    res.end();

}


const server=http.createServer(handleserver);

server.listen(3000, function(){
    console.log('Serveer on port 3000'.green);
});
 //para poder ver el codigo correr en la terminal
 //y abrir el chrome y colocar:http://localhost:3000/


