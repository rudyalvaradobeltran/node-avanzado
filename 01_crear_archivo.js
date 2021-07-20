/* genera archivo.txt para realizar prueba de tiempo con streams.js ¨*/
const fs = require('fs');

const archivo = fs.createWriteStream('archivos/01_archivo_crear_archivo.txt');

for(let i=0; i<=1e6; i++){
  archivo.write('BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH');
}

archivo.end();