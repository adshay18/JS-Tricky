function createAccount(pin, balance = 0) {
	return {
		checkBalance(PIN) {
			if (PIN === pin) {
				return `$${balance}`;
			} else {
				return 'Invalid PIN.';
			}
		},
		deposit(PIN, amount) {
			if (PIN === pin) {
				balance = balance + amount;
				return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
			} else {
				return 'Invalid PIN.';
			}
		},
		withdraw(PIN, amount) {
			if (PIN == pin) {
				if (amount <= balance) {
					balance = balance - amount;
					return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
				} else {
					return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
				}
			} else {
				return 'Invalid PIN.';
			}
		},
		changePin(oldPin, newPin) {
			if (oldPin === pin) {
				pin = newPin;
				return 'PIN successfully changed!';
			} else {
				return 'Invalid PIN.';
			}
		}
	};
}

module.exports = { createAccount };
