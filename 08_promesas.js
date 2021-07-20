/* copia contenido de archivo2.txt a archivo5.txt con promesas */
const promesasNode = require('fs').promises;

promesasNode.copyFile('archivos/08_archivo_promesas_original.txt', 'archivos/08_archivo_promesas_copia.txt')
  .then(() => console.log('Copia terminada'))
  .catch(() => console.log('No se puede copiar el archivo'))
  .finally(() => console.log('Siempre va pasar acá'));