/* https://www.hackerrank.com/challenges/append-and-delete/problem
 */
function appendAndDelete(s, t, k) {
	let sIndex = 0;
	let tIndex = 0;

	//In Common
	while (sIndex < s.length && tIndex < t.length) {
		console.log(s.charAt(0));
		if (s.charAt(sIndex) == t.charAt(tIndex)) {
			sIndex++;
			tIndex++;
		} else {
			break;
		}
	}

	let minOperationNeeded = 0;

	minOperationNeeded = s.length - sIndex + t.length - tIndex;

	if (k < minOperationNeeded) return "No";
	if (k >= s.length + t.length) return "Yes";
	if ((k - minOperationNeeded) % 2 === 0) return "Yes";
	return "No";
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));

/* 
case 1
aaaaaaaaaa
aaaaa
7


case 2
zzzzz
zzzzzzz
4

case 3



*/
