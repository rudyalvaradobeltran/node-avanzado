/* realiza una lectura de archivo mediante eventos dentro de un ciclo de vida de lectura */
const fs = require('fs');

const streamLectura = fs.createReadStream('archivos/03_archivo_read_stream.txt', { encoding: 'utf-8' });

streamLectura.on('open', ()=> {
  console.log('Abriendo archivo');
}).on('data', () => {
  console.log('----');
}).on('close', () => {
  console.log('Archivo cerrado');
}).on('error', () => {
  console.log('Error en el archivo');
});