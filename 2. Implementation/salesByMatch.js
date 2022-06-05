/* 
https://www.hackerrank.com/challenges/sock-merchant/problem
*/
function sockMerchant(n, ar) {
	let mapNumbers = {};

	for (let number of ar) {
		if (mapNumbers[number]) {
			mapNumbers[number]++;
		} else {
			mapNumbers[number] = 1;
		}
	}

	let mapNumbersValues = Object.values(mapNumbers);

	let valuesIntoTwo = mapNumbersValues
		.map((value) => {
			return Math.floor(value / 2);
		})
		.reduce((total, number) => {
			return total + number;
		}, 0);

	return valuesIntoTwo;
}
