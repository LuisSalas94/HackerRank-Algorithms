/* 
https://www.hackerrank.com/challenges/grading/problem
*/
function gradingStudents(grades) {
	//round up to next multiple of 5
	let roundedUp = [];
	for (let i = 0; i < grades.length; i++) {
		let num = grades[i];
		let temp = num;
		let firstDigit = Math.floor(temp / 10);
		let secondDigit = temp % 10;
		let newNum = 0;

		if (num === 0) {
			roundedUp.push(0);
			break;
		}

		if (secondDigit <= 4) {
			newNum = Number(
				firstDigit.toString().concat(secondDigit + (5 - secondDigit))
			);
			roundedUp.push(newNum);
		} else if (secondDigit >= 5) {
			newNum = Number((firstDigit + 1).toString().concat(0));
			roundedUp.push(newNum);
		}
	}

	//comparison
	let box = [];
	for (let i = 0; i < grades.length; i++) {
		for (let j = 0; j < roundedUp.length; j++) {
			if (roundedUp[j] - grades[i] < 3) {
				box.push(roundedUp[j]);
				break;
			}

			if (roundedUp[j] - grades[i] === 3) {
				box.push(grades[i]);
				break;
			}

			if (grades[i] < 38) {
				box.push(grades[i]);
				break;
			}
		}
	}

	return box;
}

console.log(gradingStudents([73, 67, 38, 0]));

/* 
function gradingStudents(grades) {
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] >= 38 && (grades[i] % 5 == 3 || grades[i] % 5 == 4)) {
			grades[i] = grades[i] + (5 - (grades[i] % 5));
		}
	}
	return grades;
}
 */
