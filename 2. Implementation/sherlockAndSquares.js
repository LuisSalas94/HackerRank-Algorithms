/* https://www.hackerrank.com/challenges/sherlock-and-squares/problem */
/* function squares(a, b) {
	let count = 0;

	for (let i = a; i <= b; i++) {
		for (let j = 1; j <= b; j++) {
			if (i === j * j) {
				count++;
			}
		}
	}

	return count;
} */

function squares(a, b) {
	return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

console.log(squares(17, 24));
