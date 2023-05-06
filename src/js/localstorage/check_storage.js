import { load } from "../localstorage/save_load_remove.js";

const token = load("token");
const userToken = load("profile");

/**
 * This function stops none users to visit home page or profile page
 * @param {Element} deleteBtn This is the html location of the element button.
 * @param {string} token This is the localStorage key with access token value.
 * @param {string} userToken This is the localStorage key with user profile data value.
 */

export function checkUserToken() {
	if (!token && !userToken) {
		window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
	}
}

export function checkUserTokenLogin() {
	if (token && userToken) {
		window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
	}
}
