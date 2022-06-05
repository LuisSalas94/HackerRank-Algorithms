/* 
https://www.hackerrank.com/challenges/save-the-prisoner/problem

*/
function saveThePrisoner(n, m, s) {
	// Write your code here
	return ((m % n) + (s - 1)) % n || n;
}

console.log(saveThePrisoner(4, 6, 2));
