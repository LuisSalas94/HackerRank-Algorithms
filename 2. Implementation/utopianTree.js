/* 
https://www.hackerrank.com/challenges/utopian-tree/problem
*/
function utopianTree(n) {
	// Write your code here
	let size = 0;

	for (let i = 0; i <= n; i++) {
		if (i % 2 === 0) {
			size += 1;
		} else {
			size *= 2;
		}
	}

	return size;
}

console.log(utopianTree(5));
