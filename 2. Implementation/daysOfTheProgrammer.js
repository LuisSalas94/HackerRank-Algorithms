/* 
https://www.hackerrank.com/challenges/day-of-the-programmer/problem
*/

function dayOfProgrammer(year) {
	const programmersDay = 256;
	const leapYearSum = 244;
	const regularYearSum = 243;
	const leapProgrammersResult = `${
		programmersDay - leapYearSum
	}.09.${year}`.toString();

	const regularProgrammerResult = `${
		programmersDay - regularYearSum
	}.09.${year}`.toString();

	//Juian Calender
	if (year >= 1700 && year <= 1917) {
		//leap lear
		if (year % 4 === 0) {
			return leapProgrammersResult;
			//not leap year
		} else {
			return regularProgrammerResult;
		}
		//Gregorian Calender
	} else if (year === 1918) {
		return `26.09.${year}`;
	} else {
		//leap year
		if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
			//regular year
			return leapProgrammersResult;
		} else {
			return regularProgrammerResult;
		}
	}
}
