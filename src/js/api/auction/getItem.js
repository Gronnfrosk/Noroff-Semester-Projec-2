import { API_AUCTION_LISTING_URL, API_AUCTION_LISTING_URL_ACTIVE } from "../constants.js";
import { authFetch } from "../auth_fetch.js";
import { getFilterItems } from "./../../auction/all-listings/filter_items.js";
import { searchItems } from "./../../auction/all-listings/search.js";

const action = "?_bids=true&_seller=true";

/**
 * This async function sends an API "Get" request.
 * @param {String} API_AUCTION_LISTING_URL_ACTIVE This is the complete url needed for "GET" request.
 * @function getFilterItems() This function filters the array of auction items based on query string parameters and adds active class to target filter.
 * @function searchItems() This function uses auction items title to display the search results when keypress enter or search button is clicked.
 */
export async function getAuctionItems() {
	const response = await authFetch(API_AUCTION_LISTING_URL_ACTIVE);
	const result = await response.json();

	getFilterItems(result);
	searchItems(result);
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
