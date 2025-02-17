// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
// and the negatives become positives.

function invert(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = -array[i];
	}
	return array;
}
