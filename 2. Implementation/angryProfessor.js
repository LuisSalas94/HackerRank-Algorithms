/* 
https://www.hackerrank.com/challenges/angry-professor/problem
*/

function angryProfessor(k, a) {
	const arrivalLength = a.filter((ele) => {
		return ele <= 0;
	}).length;

	if (arrivalLength >= k) {
		return console.log("NO");
	} else {
		return console.log("YES");
	}
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
