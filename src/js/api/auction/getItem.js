import { API_AUCTION_LISTING_URL, API_AUCTION_LISTING_URL_ACTIVE } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

const action = "?_bids=true&_seller=true";

export async function getAuctionItems() {
	const response = await authFetch(API_AUCTION_LISTING_URL_ACTIVE);
	return await response.json();
}

export async function getItem(id) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const getCardURL = API_AUCTION_LISTING_URL + id + action;
	const response = await authFetch(getCardURL);

	return await response.json();
}
