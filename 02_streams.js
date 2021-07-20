/* realiza prueba de tiempo de lectura de archivo, de manera síncrona y asíncrona */
const fs = require('fs');

console.time('Tiempo de respuesta');

/* síncrona */
/* for(let i=0; i<=10; i++){
    fs.readFileSync('archivo/01_archivo_crear_archivo.txt', 'utf-8');
} */

/* asíncrona */
for(let i=0; i<=10; i++){
  const streamEscritura = fs.createReadStream('archivos/01_archivo_crear_archivo.txt', { 
    encoding: 'utf-8'
  });
}

console.timeEnd('Tiempo de respuesta');
