// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
	const xArr = [];
	const oArr = [];
	for (el of str) {
		if (el.toLowerCase() === "x") {
			xArr.push(el);
		} else if (el.toLowerCase() === "o") {
			oArr.push(el);
		}
	}
	return xArr.length === oArr.length;
}
