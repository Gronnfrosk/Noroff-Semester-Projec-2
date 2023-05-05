import { API_AUCTION_PROFILE_URL } from "../constants.js";
import { load } from "../../localstorage/save_load_remove.js";
import { authFetch } from "../auth_fetch.js";

const method = "put";

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} registerURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method "POST".
 */
export async function editAvatar(media) {
	const profile = load("profile");

	if (profile) {
		const userName = profile.name;
		const avatarURL = API_AUCTION_PROFILE_URL + userName + "/media";

		const response = await authFetch(avatarURL, {
			method,
			body: JSON.stringify({ avatar: media }),
		});

		if (response.ok) {
			window.location.reload();
		} else {
			alert("Error! Your avatar was not changed.");
		}
	}
}
