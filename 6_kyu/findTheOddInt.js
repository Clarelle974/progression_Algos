// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
	const result = [];
	for (let i = 0; i < A.length; i++) {
		result[i] = A.filter((el) => el === A[i]);
		if (result[i].length % 2 !== 0) {
			return result[i][0];
		}
	}
}