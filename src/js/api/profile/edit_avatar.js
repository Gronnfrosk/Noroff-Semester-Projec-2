import { API_AUCTION_PROFILE_URL } from "../constants.js";
import { load } from "../../localstorage/save_load_remove.js";
import { authFetch } from "../auth_fetch.js";

const method = "put";

/**
 * This async function sends an API "PUT" request and informs if not successful.
 * @param {string} media The new avatar url that will be sent by the "PUT" request.
 * @param {Object} profile This is the localStorage profile data.
 * @param {string} userName The name of localStorage profile.
 * @param {String} avatarURL This is the complete url needed for "PUT" request.
 * @param {String} method The HTTP request method "PUT".
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
