const array = [7, 69, 2, 221, 8974];

function minMaxSum(arr) {
	const newSortedArray = arr.sort((a, b) => {
		return a - b;
	});

	const minElements = newSortedArray.slice(0, 4).reduce((total, number) => {
		return total + number;
	}, 0);

	const maxElements = newSortedArray.slice(1, 5).reduce((total, number) => {
		return total + number;
	}, 0);

	return console.log(minElements, maxElements);
}

minMaxSum(array);
