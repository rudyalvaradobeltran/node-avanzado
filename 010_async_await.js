/* uso de función asíncrona que espera el resultado de una promesa */

function numeroAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(Math.floor(Math.random() * 100));
    }, 2000);
  });
}

async function resultado() {
  console.log('resultado invocado');
  const aleatorio = await numeroAleatorio();
  console.log(aleatorio);
}

resultado();