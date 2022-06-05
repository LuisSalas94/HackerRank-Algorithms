/* 
https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
*/

function divisibleSumPairs(n, k, ar) {
	let counter = 0;
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j < ar.length; j++) {
			if (i < j && (ar[i] + ar[j]) % k === 0) {
				counter++;
			}
		}
	}
	return counter;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
