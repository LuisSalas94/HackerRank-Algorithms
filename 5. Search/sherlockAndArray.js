/* https://www.hackerrank.com/challenges/sherlock-and-array/problem */

function balancedSums(arr) {
	let left = 0;
	let element = arr[0];
	let right = arr.slice(1).reduce((a, b) => a + b, 0);

	if (left === right) return "YES";

	for (let i = 1; i < arr.length; i++) {
		left += element;
		element = arr[i];
		right -= element;
		if (left === right) return "YES";
	}

	return "NO";
}

console.log(balancedSums([1, 2, 3, 3]));

//Brute force solution
/* 
function balancedSums(arr) {
	let max = Math.max(...arr);
	let indexAtMax = 0;
	let leftSum = 0;
	let rightSum = 0;

	//find index at max
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === max) {
			indexAtMax = i;
			break;
		}
	}

	//find leftSum
	for (let i = 0; i < indexAtMax; i++) {
		leftSum += arr[i];
	}

	//find rightSum
	for (let i = indexAtMax + 1; i < arr.length; i++) {
		rightSum += arr[i];
	}

	return leftSum === rightSum ? "Yes" : "No";
}

*/
