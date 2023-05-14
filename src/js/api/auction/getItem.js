import { API_AUCTION_LISTING_URL, API_AUCTION_LISTING_URL_ACTIVE } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

const action = "?_bids=true&_seller=true";

/**
 * This async function sends an API "Get" request.
 * @param {String} API_AUCTION_LISTING_URL_ACTIVE This is the complete url needed for "GET" request.
 */
export async function getAuctionItems() {
	const response = await authFetch(API_AUCTION_LISTING_URL_ACTIVE);
	return await response.json();
}

/**
 * This async function sends an API "GET" request with an id.
 * @param {String} id The id of target listing/item.
 * @param {String} action The optimal query parameters to include additional properties in the response.
 * @param {String} getCardURL This is the complete url needed for "GET" request.
 */
export async function getItem(id) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const getCardURL = API_AUCTION_LISTING_URL + id + action;
	const response = await authFetch(getCardURL);

	return await response.json();
}
