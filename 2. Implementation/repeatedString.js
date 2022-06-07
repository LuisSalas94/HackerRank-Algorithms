/* https://www.hackerrank.com/challenges/repeated-string/problem
 */
function repeatedString(s, n) {
	// Write your code here
	const obj = {};

	while (s.length <= n) {
		s += s;
	}

	let counter = 0;

	const trimmmedString = s.substring(0, n);

	const result = trimmmedString.split("");

	for (const item of result) {
		if (item === "a") {
			counter += 1;
		}
	}

	return counter;
}

console.log(repeatedString("beeaabc", 10));
