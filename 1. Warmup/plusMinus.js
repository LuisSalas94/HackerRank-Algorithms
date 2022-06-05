/*https://www.hackerrank.com/challenges/plus-minus/problem  */

const array = [1, 1, 0, -1, -1];

function plusMinus(arr) {
	//array length
	const arrayLength = arr.length;

	//Numbers of positives/negatives/zeros
	const numberOfPositives = findPositives(arr);
	const numberOfNegatives = findNegatives(arr);
	const numberOfZeros = findZeros(arr);

	//ratios of positives/negatives/zeros
	const ratioOfPositives = (numberOfPositives / arrayLength).toFixed(6);
	const ratioOfNegatives = (numberOfNegatives / arrayLength).toFixed(6);
	const ratioOfZeros = (numberOfZeros / arrayLength).toFixed(6);

	/* Helper Methods */
	//find positives function
	function findPositives(arr) {
		let counter = 0;

		for (let number of arr) {
			if (number > 0) counter++;
		}

		return counter;
	}

	//find negatives function
	function findNegatives(arr) {
		let counter = 0;

		for (let number of arr) {
			if (number < 0) counter++;
		}

		return counter;
	}

	//find zeros function
	function findZeros(arr) {
		let counter = 0;

		for (let number of arr) {
			if (number === 0) counter++;
		}

		return counter;
	}

	return console.log(
		ratioOfPositives,
		"\n",
		ratioOfNegatives,
		"\n",
		ratioOfZeros
	);
}

//function called
plusMinus(array);
