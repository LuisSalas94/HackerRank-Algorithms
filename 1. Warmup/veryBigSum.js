const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function sumArray(array) {
	let sum = 0;

	for (let arr of array) {
		sum += arr;
	}
	return sum;
}

console.log(sumArray(arr));
