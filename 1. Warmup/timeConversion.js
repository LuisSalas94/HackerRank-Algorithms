//Time Conversion

const s = "02:34:50PM";

function timeConversion(s) {
	let firstTwoDigits = s.slice(0, 2);
	let lastTwoDigits = s.slice(-2);
	let stringFirstTwoDigitsPlus12 = (Number(firstTwoDigits) + 12).toString();

	//first condition
	if (firstTwoDigits === "12" && lastTwoDigits === "PM") {
		return s.slice(0, -2);
		//second condition
	} else if (firstTwoDigits === "12" || lastTwoDigits === "AM") {
		return s.slice(0, -2).replace("12", "00");
		//third condition
	} else {
		return s.replace(firstTwoDigits, stringFirstTwoDigitsPlus12).slice(0, 8);
	}
}

console.log(timeConversion(s));
