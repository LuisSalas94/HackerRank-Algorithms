/* 
https://www.hackerrank.com/challenges/permutation-equation/problem

*/
function permutationEquation(p) {
	// Write your code here
	return p.map((_, i) => p.indexOf(p.indexOf(i + 1) + 1) + 1);
}
