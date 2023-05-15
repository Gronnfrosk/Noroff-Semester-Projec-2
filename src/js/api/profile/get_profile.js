import { API_AUCTION_PROFILE_URL } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

/**
 * This async function sends an API "GET" request with a profile name.
 * @param {String} name The name of target profile.
 * @param {String} profileUrl This is the complete url needed for "GET" request.
 */
export async function getProfile(name) {
	if (!name) {
		throw new Error("Get requires a profile name!");
	}
	const profileUrl = API_AUCTION_PROFILE_URL + name;

	const response = await authFetch(profileUrl);

	return await response.json();
}

/**
 * This async function sends an API "GET" request with a profile name.
 * @param {String} name The name of target profile.
 * @param {String} profileUrl This is the complete url needed for "GET" request.
 */
export async function getProfileListings(name) {
	if (!name) {
		throw new Error("Get requires a profile name!");
	}
	const profileUrl = API_AUCTION_PROFILE_URL + name + "/listings";

	const response = await authFetch(profileUrl);

	return await response.json();
}

/**
 * This async function sends an API "GET" request with a profile name.
 * @param {String} name The name of target profile.
 * @param {String} profileUrl This is the complete url needed for "GET" request.
 */
export async function getProfileBids(name) {
	if (!name) {
		throw new Error("Get requires a profile name!");
	}
	const profileUrl = API_AUCTION_PROFILE_URL + name + "/bids?_listings=true";

	const response = await authFetch(profileUrl);

	return await response.json();
}
