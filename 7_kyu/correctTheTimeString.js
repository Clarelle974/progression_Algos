// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

function timeCorrect(timestring) {
	if (timestring === null) {
		return null;
	}
	if (timestring === "") {
		return "";
	}
	if (/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(timestring)) {
		const array = timestring.split(":");
		for (el of array) {
			el = Number.parseInt(el);
		}
		if (array[2] >= 60) {
			array[1] = array[1] * 1 + 1;
			array[2] = array[2] % 60;
		}
		if (array[1] >= 60) {
			array[0] = array[0] * 1 + 1;
			array[1] = array[1] % 60;
		}
		if (array[0] >= 24) {
			array[0] = array[0] % 24;
		}
		const arrayDisplay = [];
		for (let i = 0; i < array.length; i++) {
			arrayDisplay.push(array[i].toString());
			if (arrayDisplay[i].length < 2) {
				arrayDisplay[i] = `0${arrayDisplay[i]}`;
			}
		}
		return arrayDisplay.join(":");
	}
	return null;
}
