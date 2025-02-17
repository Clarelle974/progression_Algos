// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message) {
	const copie = [];
	for (let i = 0; i < message.length; i++) {
		copie.push(message.charCodeAt(i));
	}
	for (let j = 0; j < copie.length; j++) {
		if (copie[j] >= 65 && copie[j] <= 90) {
			copie[j] = copie[j] < 78 ? copie[j] + 13 : copie[j] - 13;
		} else if (copie[j] >= 97 && copie[j] <= 122) {
			copie[j] = copie[j] < 110 ? copie[j] + 13 : copie[j] - 13;
		}
	}
	let newString = "";

	for (const ele of copie) {
		newString += String.fromCharCode(ele);
	}
	return newString;
}
