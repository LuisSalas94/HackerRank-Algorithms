/* 
https://www.hackerrank.com/challenges/find-digits/problem
*/

function findDigits(n) {
	let digits = n
		.toString()
		.split("")
		.map((n) => Number(n));

	let count = 0;

	for (let i = 0; i < digits.length; i++) {
		if (n % digits[i] === 0) {
			count++;
		}
	}

	return count;
}

console.log(findDigits(1012));
