import { API_AUCTION_LISTING_URL } from "../constants.js";
import { authFetch } from "../auth_fetch.js";

const action = "/bids";
const method = "post";

/**
 * This async function sends an API "POST" request and informs if not successful.
 * @param {String} id The id of target listing/item.
 * @param {Number} newBid The amount of Credits from the new bid.
 * @param {String} action This endpoint will register a new bid on target listing.
 * @param {String} bidUrl This is the complete url needed for "POST" request.
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

	if (response.ok) {
		window.location.reload();
	} else {
		alert(`Error! Bid was not placed on auction item`);
	}
}
