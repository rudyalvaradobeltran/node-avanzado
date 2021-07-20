/* traspasa contenido de archivo base a destino mediante un pipe */
const fs = require('fs');

const streamLectura = fs.createReadStream('archivos/05_archivo_pipes_base.txt');
const streamEscritura = fs.createWriteStream('archivos/05_archivo_pipes_destino.txt');

streamLectura.pipe(streamEscritura);

streamLectura.on('end', () => {
    console.log('Proceso finalizado');
});