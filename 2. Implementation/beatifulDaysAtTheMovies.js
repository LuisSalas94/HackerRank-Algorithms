/* 
https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
*/

function beautifulDays(i, j, k) {
	const diference = j - i;
	let days = [];

	//funtion helper
	function reversedNumber(n) {
		const reversed = n.toString().split("").reverse().join("");
		return reversed;
	}

	for (let startingDays = 1; startingDays < diference; startingDays++) {
		days.push(i + startingDays);
	}

	let possibleDays = [...days, i, j].sort();

	let counter = 0;

	let beatifulDays = possibleDays.map((day) => {
		if (Math.abs(day - reversedNumber(day)) % k === 0) {
			counter++;
		}
	});

	return counter;
}

console.log(beautifulDays(13, 45, 3));
