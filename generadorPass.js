/*Es tracta de crear un generador de passwords.
 L'usuari ha d'indicar la mida del password i el programa ha de generar 
 i mostrar per pantalla el password corresponent. 
 El password pot contenir: minúscules, majúscules, números i aquests símbols:
	('!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>') */

const args = process.argv;

const todoHandler = async (args) => {
	switch (args[2]) {
		case "generate":
			console.log(generatePass(args[3]));
			break;
		default:
			console.log(`Please enter a valid command:
				- ls,
				- help,
				- generate [number]`);
			break;

	}
}


function generatePass(number) {
	const passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>";
	//generar password
	let password = ""
	const passwordLength = number;
	for (let i = 0; i < passwordLength; i++) {
		password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
	}
	console.log(password)
	return password;
}

todoHandler(args);
