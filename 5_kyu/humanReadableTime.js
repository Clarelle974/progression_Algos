// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	let hours = Number.parseInt(seconds / 3600);
	hours = String(hours).padStart(2, "0");
	let minutes = Number.parseInt((seconds % 3600) / 60);
	minutes = String(minutes).padStart(2, "0");
	let leftseconds = seconds % 60;
	leftseconds = String(leftseconds).padStart(2, "0");
	return `${hours}:${minutes}:${leftseconds}`;
}
