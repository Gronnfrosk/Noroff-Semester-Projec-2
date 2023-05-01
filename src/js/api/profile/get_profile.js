import { API_AUCTION_PROFILE_URL } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

export async function getProfile(name) {
	if (!name) {
		throw new Error("Get requires a profile name!");
	}
	const profileUrl = API_AUCTION_PROFILE_URL + name;

	const response = await authFetch(profileUrl);

	return await response.json();
}

export async function getProfileListings(name) {
	if (!name) {
		throw new Error("Get requires a profile name!");
	}
	const profileUrl = API_AUCTION_PROFILE_URL + name + "/listings";

	const response = await authFetch(profileUrl);

	return await response.json();
}

export async function getProfileBids(name) {
	if (!name) {
		throw new Error("Get requires a profile name!");
	}
	const profileUrl = API_AUCTION_PROFILE_URL + name + "/bids";

	const response = await authFetch(profileUrl);

	return await response.json();
}
