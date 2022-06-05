/* https://www.hackerrank.com/challenges/acm-icpc-team/problem 
https://www.youtube.com/watch?v=osPrWpxb01U&ab_channel=DevO%27lee
*/

function acmTeam(topic) {
	let arr = [];
	for (let i = 0; i < topic.length; i++) {
		for (let j = i + 1; j < topic.length; j++) {
			let count = 0;
			for (let k = 0; k < topic[0].length; k++) {
				if (topic[i][k] === "1" || topic[j][k] === "1") {
					count++;
				}
			}
			arr.push(count);
		}
	}

	const max = arr.sort((a, b) => b - a)[0];
	let maxCount = 0;

	for (let num of arr) {
		if (num === max) {
			maxCount++;
		}
	}
	return [max, maxCount];
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]));
