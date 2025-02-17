// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digitalRoot(n) {
	let result = n
		.toString()
		.split("")
		.map(Number)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	while (result >= 10) {
		result = result
			.toString()
			.split("")
			.map(Number)
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	}
	return result;
}
