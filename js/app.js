// Solicitar al usuario el mensaje a codificar

var messageToCipher = prompt("¡Coloca tu frase!");

// Solo le permite al usuario letras
// No permite espacios vacíos o números

if (/[A-Za-z]/.test(messageToCipher)===false){
  alert ('Solamente puedes agregar letras');
  todoCorrecto=false;}

// Cifrar letra por letra
for(i=0; i < messageToCipher.length; i++){
  console.log(messageToCipher);
}
