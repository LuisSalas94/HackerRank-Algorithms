/* 
https://www.hackerrank.com/challenges/bon-appetit/problem
*/

function bonAppetit(bill, k, b) {
	const bCharged = b;

	k = bill[k];

	const newBill = bill.filter((item) => item !== k);

	const bActual = newBill.reduce((total, item) => total + item, 0) / 2;

	if (bActual === bCharged) {
		return console.log("Bon Appetit");
	} else {
		return console.log(bCharged - bActual);
	}
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));

/* return bActual === bCharged ? "Bon Appetit" : bCharged - bActual; */
