/* 
https://www.hackerrank.com/challenges/electronics-shop/problem
*/

function getMoneySpent(keyboards, drives, b) {
	let final = [];

	for (let i = 0; i < keyboards.length; i++) {
		drives.map((driver) => {
			final.push(driver + keyboards[i]);
			return final;
		});
	}

	if (final > b) {
		return console.log(-1);
	} else {
		const possibleBuy = final.filter((item) => {
			return item <= b;
		});

		const bestbuy = Math.max(...possibleBuy);
		return console.log(bestbuy);
	}
}
