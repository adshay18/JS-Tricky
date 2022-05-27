function curriedAdd(total = 0) {
	if (arguments.length === 0) return total;
	return function add(num) {
		if (num === undefined) return total;
		total += num;
		return add;
	};
}

module.exports = { curriedAdd };
