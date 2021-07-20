/* ejemplo de escritura asíncrona y síncrona ejecutada simultáneamente */
const fs = require('fs');

var contenido = '1234567890';
var iteraciones = 15;

for(var i=0; i < iteraciones; i++){
  contenido += contenido;
}

fs.writeFile('archivos/04_archivo_escritura.txt', contenido, () => {
  console.log('Escritura directa finalizada');
});

const streamEscritura = fs.createWriteStream('archivos/04_archivo_escritura.txt');

streamEscritura.write(contenido, res => {
  console.log('Stream finalizado');
});