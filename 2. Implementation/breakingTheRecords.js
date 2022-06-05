/* https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem */

//let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
/* let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]; */

function breakingRecords(scores) {
	const mostPointRecords = getHightesScores(scores);

	const lestPointRecords = getLowestScores(scores);

	function getHightesScores(scores) {
		let highScoreCounter = 0;
		let firstHighScoreNumber = scores[0];
		for (let i = 1; i < scores.length; i++) {
			if (scores[i] > firstHighScoreNumber) {
				firstHighScoreNumber = scores[i];
				highScoreCounter++;
			}
		}
		return highScoreCounter;
	}

	function getLowestScores(scores) {
		let lowestScoreCounter = 0;
		let firstLowestScore = scores[0];
		for (let i = 1; i < scores.length; i++) {
			if (scores[i] < firstLowestScore) {
				firstLowestScore = scores[i];
				lowestScoreCounter++;
			}
		}
		return lowestScoreCounter;
	}

	console.log([mostPointRecords, lestPointRecords]);
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
