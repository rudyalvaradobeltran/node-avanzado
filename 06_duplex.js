/* implementa duplex (punto medio en un pipe para ejecutar una función de escritura y lectura) */
const fs = require('fs');
const { Duplex } = require('stream');

const streamLectura = fs.createReadStream('archivos/06_archivo_duplex_base.txt');
const streamEscritura = fs.createWriteStream('archivos/06_archivo_duplex_destino.txt');

const reporte = new Duplex({
  write(data, encode, callback){
      console.log(data);
      callback();
  },
  read(size){}
});

streamLectura.pipe(reporte).pipe(streamEscritura);