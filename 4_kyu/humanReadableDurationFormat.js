// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
function formatDuration(timeInSeconds) {
	let minutes = Math.floor(timeInSeconds / 60);
	const seconds = timeInSeconds % 60;
	let hours = Math.floor(minutes / 60);
	minutes = minutes % 60;
	let days = Math.floor(hours / 24);
	hours = hours % 24;
	const years = Math.floor(days / 365);
	days = days % 365;
	const answer = [];
	if (years === 1) {
		answer.push("1 year");
	} else if (years > 1) {
		answer.push(`${years} years`);
	}
	if (days === 1) {
		answer.push("1 day");
	} else if (days > 1) {
		answer.push(`${days} days`);
	}
	if (hours === 1) {
		answer.push("1 hour");
	} else if (hours > 1) {
		answer.push(`${hours} hours`);
	}
	if (minutes === 1) {
		answer.push("1 minute");
	} else if (minutes > 1) {
		answer.push(`${minutes} minutes`);
	}
	if (seconds === 1) {
		answer.push("1 second");
	} else if (seconds > 1) {
		answer.push(`${seconds} seconds`);
	}
	if (answer.length === 5) {
		return `${answer[0]}, ${answer[1]}, ${answer[2]}, ${answer[3]} and ${answer[4]}`;
	}
	if (answer.length === 4) {
		return `${answer[0]}, ${answer[1]}, ${answer[2]} and ${answer[3]}`;
	}
	if (answer.length === 3) {
		return `${answer[0]}, ${answer[1]} and ${answer[2]}`;
	}
	if (answer.length === 2) {
		return `${answer[0]} and ${answer[1]}`;
	}
	if (answer.length === 1) {
		return `${answer[0]}`;
	}
	return "now";
}
