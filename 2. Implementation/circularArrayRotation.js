/* 
https://www.hackerrank.com/challenges/circular-array-rotation/problem

*/

/* 
int a[n]: the array to rotate
int k: the rotation count
int queries[1]: the indices to report
*/

function circularArrayRotation(a, k, queries) {
	// n times rotation
	let result = a;

	for (let i = 0; i < k; i++) {
		const lastEle = result[result.length - 1];
		result.pop();
		result.unshift(lastEle);
	}

	//final elements container
	let final = [];

	queries.map((i) => {
		final.push(result[i]);
	});

	return final;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
