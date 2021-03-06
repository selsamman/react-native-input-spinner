/**
 * Is empty
 * @param x
 * @returns {boolean}
 */
export const isEmpty = (x) => {
	if (typeof x === typeof "") x = x.replace(/\s/g, "");

	if (!x) return true;
	if (x === "") return true;
	if (x === {}) return true;
	if (x === []) return true;
	if (x == null) return true;
	if (typeof x === "undefined") return true;
	if (x === "") return true;
	if (x === function () {}) return true;

	if (typeof x === typeof {}) {
		if (Object.entries(x).length === 0 && x.constructor === Object) {
			return true;
		}
		for (let key in x) {
			if (x.hasOwnProperty(key) && !isEmpty(x[key])) {
				return false;
			}
		}
		return true;
	}
	return false;
};

/**
 * Debounce
 * @param callback
 * @param wait
 * @returns {function(...[*]=): void}
 */
export const debounce = (callback, wait) => {
	let timeout;
	return function (...args) {
		const context = this;
		clearTimeout(timeout);
		timeout = setTimeout(() => callback.apply(context, args), wait);
		return timeout;
	};
};

/**
 * Detect if is a numeric value
 * @param num
 * @returns {boolean}
 */
export const isNumeric = (num) => {
	return (
		num !== "" &&
		num !== null &&
		num !== false &&
		!isNaN(parseFloat(num)) &&
		!isNaN(num - 0)
	);
};
