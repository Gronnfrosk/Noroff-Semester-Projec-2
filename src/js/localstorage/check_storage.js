import { load } from "../localstorage/save_load_remove.js";

const token = load("token");
const userToken = load("profile");

/**
 * This function stops none user to visit profile page.
 * @param {String} token This is the localStorage key with access token value.
 * @param {Object} userToken This is the localStorage key with user profile data value.
 */

export function checkUserToken() {
	if (!token && !userToken) {
		window.location.href = "./index.html";
	}
}

/**
 * This function stops logged in user to visit login and register page.
 * @param {String} token This is the localStorage key with access token value.
 * @param {Object} userToken This is the localStorage key with user profile data value.
 */
export function checkUserTokenLogin() {
	if (token && userToken) {
		window.location.href = "./index.html";
	}
}
