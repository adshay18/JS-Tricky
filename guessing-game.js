function guessingGame() {
	let number = Math.floor(Math.random() * 100);
	let winner = false;
	let count = 0;
	return function guess(num) {
		if (winner) return 'The game is over, you already won!';
		if (num < number) {
			count++;
			return `${num} is too low!`;
		} else if (num > number) {
			count++;
			return `${num} is too high!`;
		}
		if (num === number) {
			count++;
			winner = true;
			return `You win! You found ${number} in ${count} guesses.`;
		}
	};
}

module.exports = { guessingGame };
