function createPhoneNumber(numbers) {
	let part1 = "";
	let part2 = "";
	let part3 = "";
	let phoneNumber = `(${part1}) ${part2}-${part3}`;

	for (let i = 0; i < 4; i++) {
		part1 = [...part1, numbers[i]];
	}

	for (let j = 3; j < 6; j++) {
		part2 = [...part2, numbers[j]];
	}

	for (let k = 6; k < 9; k++) {
		part3 = [...part3, numbers[k]];
	}

	return phoneNumber;
}

function createPhoneNumber(numbers) {
	var format = "(xxx) xxx-xxxx";

	for (var i = 0; i < numbers.length; i++) {
		format = format.replace("x", numbers[i]);
	}

	return format;
}
