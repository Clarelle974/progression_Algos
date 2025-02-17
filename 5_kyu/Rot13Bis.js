// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

function rot13(str) {
	// je transforme ma chaine de caractères en tableau : NON, charCodeAt fonctionne sur les strings
	const copie = [];
	for (let i = 0; i < str.length; i++) {
		copie.push(str.charCodeAt(i));
	}
	for (let j = 0; j < copie.length; j++) {
		if (copie[j] >= 65 && copie[j] <= 90) {
			copie[j] = copie[j] < 78 ? copie[j] + 13 : copie[j] - 13;
		} else if (copie[j] >= 97 && copie[j] <= 122) {
			copie[j] = copie[j] < 110 ? copie[j] + 13 : copie[j] - 13;
		}
	}
	let newString = "";

	for (let ele of copie) {
		newString += String.fromCharCode(ele);
	}
	return newString;
}
