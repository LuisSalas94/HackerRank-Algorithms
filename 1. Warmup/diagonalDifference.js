const arr = [
	[-1, 1, -7, -8],
	[-10, -8, -5, -2],
	[0, 9, 7, -7],
	[4, 4, -2, 1],
];
/* 
function diagonalDifference(arr) {
	const leftToRight = arr[0][0] + arr[1][1] + arr[2][2];
	const rightToLeft = arr[0][2] + arr[1][1] + arr[2][0];

	const result = Math.abs(leftToRight - rightToLeft);

	return result;
}
 */

function diagonalDifference(arr, n) {
	let leftR = 0;
	let rightL = 0;

	for (let i = 0; i < n; i++) {
		leftR += arr[i][i];
		rightL += arr[i][n - i - 1];
	}

	let result = Math.abs(leftR - rightL);

	return result;
}

console.log(diagonalDifference(arr, 4));
