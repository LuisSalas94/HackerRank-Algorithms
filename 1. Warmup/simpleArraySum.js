/* Given an array of integers, find the sum of its elements. */
const array = [1, 2, 3, 4, 5];

function sumArray(array) {
	let sum = 0;
	for (let arr of array) {
		sum += arr;
	}
	return sum;
}

console.log(sumArray(array));
