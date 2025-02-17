// Given an array of integers.

// Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
	let sumOfNegatives = 0;
	let arrayOfPositives = [];
	if (input == null) {
		return [];
	} else {
		for (let i = 0; i < input.length; i++) {
			if (input[i] > 0) {
				arrayOfPositives.push(input[i]);
			} else {
				sumOfNegatives += input[i];
			}
		}
		if (
			arrayOfPositives === false ||
			arrayOfPositives === 0 ||
			sumOfNegatives === false ||
			sumOfNegatives === 0
		) {
			return [];
		} else {
			return [arrayOfPositives.length, sumOfNegatives];
		}
	}
}
