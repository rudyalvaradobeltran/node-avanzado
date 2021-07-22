/* uso de cadena de promesas */

function login() {
  console.log('inicia login');
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve();
    }, 1500);
  });
}

function datosDeUsuario() {
  console.log('inicia datos usuario');
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve();
    }, 1500);
  });
}

login().then(()=>{
  console.log('usuario autenticado');
  return datosDeUsuario();
}).then(()=>{
  console.log('datos de usuario ok');
}).catch(()=>{
  console.log('error');
});