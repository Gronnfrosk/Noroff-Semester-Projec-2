import { API_AUCTION_LISTING_URL } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

const method = "post";

/**
 * This async function sends an API "POST" request.
 * @param {Object} postData The data that will be sent to the "POST" request.
 * @param {String} updatePostURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method.
 */
export async function createAuctionItem(postData) {
	const response = await authFetch(API_AUCTION_LISTING_URL, {
		method,
		body: JSON.stringify(postData),
	});

	if (response.ok) {
		alert("You have now put an item on auction. You can view this item at listings on your profile page");
	} else {
		alert("Error! Something went wrong. Please try again.");
	}

	return await response.json();
}
