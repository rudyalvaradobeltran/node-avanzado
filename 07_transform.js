/* implementa transform (punto medio en un pipe que sirve para modificar un output) */
const fs = require('fs');
const { Transform } = require('stream');

const streamLectura = fs.createReadStream('archivos/07_archivo_transform_base.txt');
const streamEscritura = fs.createWriteStream('archivos/07_archivo_transform_destino.txt');

streamLectura.setEncoding('utf8');

const filtro = new Transform({
  writableObjectMode: true,
  transform(data, encode, callback){
    /* convierte cada caracter a mayúscula */
    this.push(data.toString().toUpperCase());
    callback();
  },
  final(callback){
    callback();
  }
});

streamLectura.pipe(filtro).pipe(streamEscritura);