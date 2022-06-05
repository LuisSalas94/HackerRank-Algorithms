/* 
https://www.hackerrank.com/challenges/strange-advertising/problem?h_r=next-challenge&h_v=zen
*/
function viralAdvertising(n) {
	//day one
	let shared = 5;
	let liked = 2;
	let cumulative = 2;
	let count = 1;

	while (count < n) {
		shared = liked * 3;
		liked = Math.floor(shared / 2);
		cumulative = cumulative + liked;
		count++;
	}

	return cumulative;
}

console.log(viralAdvertising(3));
