// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
	const numbersArr = numbers.split(" ");
	const highest = Math.max(...numbersArr);
	const lowest = Math.min(...numbersArr);

	return `${highest} ${lowest}`;
}
