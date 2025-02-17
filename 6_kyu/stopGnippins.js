// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(string) {
	const array = string.split(" ");
	const newArray = [];
	for (word of array) {
		if (word.length >= 5) {
			word.split("");
			newArray.push(word.split("").reverse().join(""));
		} else {
			newArray.push(word);
		}
	}
	return newArray.join(" ");
}
