/* devuelve una promesa cuando se cumplen todas las promesas que recibe por argumento */
function mensajesPrivados() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('mensajes');
    }, 1500);
  });
}

function galeriaFotos() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('fotos');
    }, 1500);
  });
}

function ultimasTransacciones() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('transacciones');
    }, 1500);
  });
}

Promise.all([mensajesPrivados(), galeriaFotos(), ultimasTransacciones()]).then((valores)=>{
  console.log(valores);
});