function createPhoneNumber(numbers) {
	let part1 = "";
	let part2 = "";
	let part3 = "";
	let phoneNumber = `(${part1}) ${part2}-${part3}`;

	for (let i = 0; i < 4; i++) {
		part1 += numbers[i];
	}

	for (let j = 4; j < 7; j++) {
		part2 += numbers[j];
	}

	for (let k = 0; k < 4; k++) {
		part3 += numbers[k];
	}

	return phoneNumber;
}
