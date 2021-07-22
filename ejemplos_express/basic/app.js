const express = require('express');
const app = express();
const puerto = 3010;

app.get('/' , (request, respuesta)=> {
  respuesta.send('Hola Mundo');
});

app.listen( puerto , ()=>{ 
  console.log(`escuchando el puerto ${puerto}!`);
});