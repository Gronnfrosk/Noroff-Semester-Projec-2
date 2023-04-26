import { API_AUCTION_URL } from "../constants.js";
import * as key from "../../localstorage/save_load_remove.js";

const auth = key.load("token");
const profile = key.load("profile");

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} registerURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method "POST".
 */
export async function editAvatar(media) {
	if (profile) {
		const userName = profile.name;
		const method = "put";
		const action = "/profiles/" + userName + "/media";
		const avatarURL = API_AUCTION_URL + action;

		const response = await fetch(avatarURL, {
			headers: { "Content-type": "application/json", Authorization: `Bearer ${auth}` },
			method,
			body: JSON.stringify({ avatar: media }),
		});

		const { accessToken, ...user } = await response.json();

		if (response.ok) {
			key.save("profile", user);
			window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html";
		} else {
			alert("Error! Your avatar was not changed.");
		}
	}
}
