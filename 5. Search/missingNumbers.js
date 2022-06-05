/* https://www.hackerrank.com/challenges/missing-numbers/problem */
function missingNumbers(arr1, arr2) {
	let hash1 = {};
	let hash2 = {};

	for (let item of arr1) {
		hash1[item] ? hash1[item]++ : (hash1[item] = 1);
	}

	for (let item of arr2) {
		hash2[item] ? hash2[item]++ : (hash2[item] = 1);
	}

	hash1;
	hash2;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));

/* 

	[203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
		[203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]

*/
