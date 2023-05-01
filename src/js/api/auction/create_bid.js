import { API_AUCTION_LISTING_URL } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

const action = "/bids";
const method = "post";

/**
 * This async function sends an API "POST" request.
 * @param {Object} postData The data that will be sent to the "POST" request.
 * @param {String} updatePostURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method.
 */
export async function createBid(id, newBid) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const bidUrl = API_AUCTION_LISTING_URL + id + action;

	const response = await authFetch(bidUrl, {
		method,
		body: JSON.stringify({ amount: newBid }),
	});

	const bidInfo = await response.json();

	if (response.ok) {
		setTimeout(() => {
			window.location.reload();
		}, 500);
	} else {
		alert(`Error! Bid was not placed on auction item: ${bidInfo.title}`);
	}
}
