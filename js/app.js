var message = prompt("¡Coloca tu frase!");/*

/*Solo le permite al usuario letras
No permite espacios vacíos o números*/

if (/[A-Za-z]/.test(message)===false){
  alert ('Solamente puedes agregar letras'); 
}else{
	(/[A-Za-z]/.test(message)=false)
}



/*Función para cifrar el mensaje del prompt
(x-65+n)%26+65 */
/*function cipher(message){
	var messageCipher = "";
	for(var i=0; i<message.length; i++){
		var messChar =(message.charCodeAt(i) - 65 + 33) % 26 + 65;
	}
	messageCipher = String.fromCharCode(messChar);
}
return messageCipher;

/*Función para decifrar el mensaje del prompt*/
/*function decipher(message){
	var messageDecipher = "";
	for(var i=0; i<message.length; i++){
		var messFromChar =((String.fromCharCode(i) + 33) % 26;
		messageDecipher = messageDecipher + messFromChar;
		var finalDecipher = finalDecipher.charCodeAt(messFromChar);
	}
	return finalDecipher;
}
*/










// Solicitar al usuario el mensaje a codificar

/*var messageToCipher = prompt("¡Coloca tu frase!");/*

// Solo le permite al usuario letras
// No permite espacios vacíos o números

/*if (/[A-Za-z]/.test(messageToCipher)===false){
  alert ('Solamente puedes agregar letras'); 
  todoCorrecto=false;
}*/








