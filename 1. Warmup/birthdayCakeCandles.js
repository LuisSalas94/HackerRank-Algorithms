/* https://www.hackerrank.com/challenges/birthday-cake-candles/problem */
//Main function
function birthDayCandles(candles) {
	let maxElement = maxElementOfArray(candles);
	let numberOfTimesInArray = numberOftimes(candles);
	//find max element in array
	function maxElementOfArray(candles) {
		let max = 0;

		for (let number of candles) {
			if (number > max) {
				max = number;
			}
		}

		return max;
	}

	//number of times in Array
	function numberOftimes(candles) {
		let count = 0;

		for (let number of candles) {
			if (number === maxElement) {
				count++;
			}
		}

		return count;
	}

	return numberOfTimesInArray;
}

console.log(birthDayCandles([4, 4, 1, 3]));
