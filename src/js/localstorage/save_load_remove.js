/**
 * This function stores the JSON Web Token as JSON to localStorage.
 * @param {string} key name of key in localStorage
 * @param {*} value The value of the key.
 */
export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

/**
 * This function retrieves and parse the Web Token from localStorage.
 * @param {string} key name of key in localStorage
 */
export function load(key) {
	try {
		const value = localStorage.getItem(key);
		return JSON.parse(value);
	} catch {
		return null;
	}
}

/**
 * This function removes the JSON Web Token from localStorage.
 * @param {string} key name of key in localStorage
 */
export function remove(key) {
	localStorage.removeItem(key);
}
