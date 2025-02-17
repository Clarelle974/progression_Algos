// Description:
// Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

// For empty arrays, result should be zero (except for Haskell).

// Note
// The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

function alternateSqSum(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			result += arr[i] * arr[i];
		} else {
			result += arr[i];
		}
	}
	return result;
}
