function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let sumOfApple = addLocationFruits(a, apples);
	let sumOfOranges = addLocationFruits(b, oranges);
	let appleInHouse = fruitsInHouse(sumOfApple);
	let orangeInHouse = fruitsInHouse(sumOfOranges);

	//Helper Methods
	function addLocationFruits(fruitTree, fruitsArray) {
		return fruitsArray.map((a) => {
			return a + fruitTree;
		});
	}

	function fruitsInHouse(sumOfFruit) {
		let count = 0;
		for (let fruit of sumOfFruit) {
			if (fruit >= s && fruit <= t) {
				count++;
			}
		}
		return count;
	}

	console.log(appleInHouse);
	console.log(orangeInHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
