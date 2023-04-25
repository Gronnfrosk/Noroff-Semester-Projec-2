import { API_AUCTION_URL } from "../constants.js";

const action = "/auth/register";
const method = "post";

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} registerURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method "POST".
 */
export async function register(profile) {
	const registerURL = API_AUCTION_URL + action;

	const response = await fetch(registerURL, {
		headers: { "Content-type": "application/json" },
		method,
		body: JSON.stringify(profile),
	});

	const result = await response.json();
	if (response.ok) {
		alert("Welcome to GreenFrog! You are a member and can now login to your profile.");
		window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Projec-2";
	} else {
		alert("Error! Your account was not register.");
	}
	return result;
}
