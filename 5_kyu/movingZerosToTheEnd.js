// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
	const zeroArray = arr.filter((el) => el === 0);
	const newArray = [];
	for (const el of arr) {
		if (el !== 0) {
			newArray.push(el);
		}
	}
	for (const el of zeroArray) {
		newArray.push(el);
	}
	return newArray;
}
