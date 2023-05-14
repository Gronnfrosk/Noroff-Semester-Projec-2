import { API_AUCTION_LISTING_URL } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

const method = "post";

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {Object} item The data that will be sent to the "POST" request.
 * @param {String} API_AUCTION_LISTING_URL This is the url needed for "POST" request.
 * @param {String} method This is the HTTP request method, "POST".
 */
export async function createAuctionItem(item) {
	const response = await authFetch(API_AUCTION_LISTING_URL, {
		method,
		body: JSON.stringify(item),
	});

	if (response.ok) {
		alert("You have now put an item on auction. You can view this item at listings on your profile page");
		window.location.reload();
	} else {
		alert("Error! Something went wrong. Please try again.");
	}
}
