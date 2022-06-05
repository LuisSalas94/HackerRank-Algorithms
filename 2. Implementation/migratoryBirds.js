/* 
https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen
*/

function migratoryBirds(arr) {
	let max = 0;
	let max_id = 6;
	let store = new Array(6).fill(0);

	for (const num of arr) {
		store[num]++;
		if (store[num] > max) {
			max = store[num];
			max_id = num;
		} else if (store[num] === max && num < max_id) {
			max_id = num;
		}
	}
	return max_id;
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
