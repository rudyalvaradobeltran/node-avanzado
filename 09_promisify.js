/* convierte función con callback en una que utiliza promesas */
const fs = require('fs');
const util = require('util');

/* fs.writeFile('archivos/09_archivo_promisify_base.txt', '12345678', () => {
  console.log('ok');
});
*/

const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa('archivos/09_archivo_promisify.txt', '12345678')
  .then(()=> {
    console.log('ok');
  })
  .catch(()=> {
    console.log('error');
  });