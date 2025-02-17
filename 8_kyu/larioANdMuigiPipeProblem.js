// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
function pipeFix(numbers) {
	const result = [];
	for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
		result.push(i);
	}
	return result;
}
