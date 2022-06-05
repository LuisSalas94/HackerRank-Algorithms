/* https://www.hackerrank.com/challenges/cut-the-sticks/problem */

function cutTheSticks(arr) {
	let sticks = [...arr];
	const result = [sticks.length];
	while (sticks.length > 0) {
		let smallValue = Math.min(...sticks);
		sticks = sticks.reduce((target, stick) => {
			stick > smallValue && target.push(stick - smallValue);

			return target;
		}, []);

		sticks.length > 0 && result.push(sticks.length);
	}
	return result;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
