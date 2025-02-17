// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
	const result = l.filter(
		(element) => typeof element === "number" && element >= 0,
	);
	return result;
}
