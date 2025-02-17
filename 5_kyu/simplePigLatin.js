// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
	const arr = str.split(" ");
	let newString = "";
	for (const el of arr) {
		if (el.length === 1 && /^[a-z]+$/i.test(el)) {
			newString += `${el}ay `;
			console.log(newString);
		} else if (el.length > 1) {
			const wordArray = el.split("");
			const firstCharacter = wordArray[0];
			wordArray.shift();
			wordArray.push(`${firstCharacter}ay`);
			newString += `${wordArray.join("")} `;
		} else newString += `${el} `;
	}
	return newString.substring(0, newString.length - 1);
}
