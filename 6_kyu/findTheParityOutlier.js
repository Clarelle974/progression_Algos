// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers) {
	return integers.filter((integer) => integer % 2 === 0).length === 1
		? Number(integers.filter((integer) => integer % 2 === 0))
		: Number(integers.filter((integer) => integer % 2 !== 0));
}
