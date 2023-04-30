import { API_AUCTION_PROFILE_URL } from "../constants.js";
import { displayProfile } from "../../profile/profile_info.js";
import { searchItems } from "../../auction/search.js";

const method = "get";

export async function getProfiles() {
	const response = await fetch(API_AUCTION_PROFILE_URL, {
		headers: { "Content-type": "application/json" },
		method,
	});

	const profiles = await response.json();

	displayProfile(profiles);
}
