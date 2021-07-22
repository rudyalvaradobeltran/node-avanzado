/* ejecuta código cuando se activa un evento */
const https = require('https');

const req = https.get('https://en.wikipedia.org/w/api.php?action=help&format=json', (res) => {
  res.on('data', (data) => {   
    console.log("... recibiendo datos");
  });
  res.on('end', (data) => {   
    console.log('termina http');
  });
});
 
req.on("socket", (data) => {
    console.log("inicia http")
});
req.on('error', (data) => {
    console.log("error")
});