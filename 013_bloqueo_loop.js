/* código ineficiente con función síncrona que bloquea loop y solución asíncrona */
const fs = require('fs');
var http = require('http');

function leerArchivo() {
  //fs.readFileSync('archivos/013_archivo_bloqueo_loop.txt', 'utf-8');
  const streamLectura = fs.createReadStream('./archivos/013_archivo_bloqueo_loop.txt', {
    encoding: 'utf-8'
  });
}

http.createServer(function(req, res) {
  for(let i = 0; i < 500; i++) {
    leerArchivo();
  }
  res.write('Hola mundo');
  res.end();
}).listen(8080);