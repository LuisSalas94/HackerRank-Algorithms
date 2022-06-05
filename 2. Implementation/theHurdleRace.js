/* 
https://www.hackerrank.com/challenges/the-hurdle-race/problem
*/

function hurdleRace(k, height) {
	const maxHeight = Math.max(...height);

	if (k >= maxHeight) {
		return 0;
	} else {
		return maxHeight - k;
	}
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
