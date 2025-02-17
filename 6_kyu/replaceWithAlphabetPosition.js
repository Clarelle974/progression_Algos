// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
function alphabetPosition(text) {
	const string = text.toLowerCase();
	let result = "";
	for (let i = 0; i < text.length; i++) {
		if (/^[a-z]+$/.test(string[i])) {
			result += `${string.charCodeAt(i) - 96} `;
		}
	}
	return result.substring(0, result.length - 1);
}
