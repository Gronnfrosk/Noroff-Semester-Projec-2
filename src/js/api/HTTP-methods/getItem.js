import { API_AUCTION_LISTING_URL } from "../constants.js";
import { showCards } from "../../auction/auction_card_template.js";
import { searchItems } from "../../auction/search.js";

const action = "?_bids=true";
const method = "get";

export async function getAuctionItems() {
	const response = await fetch(API_AUCTION_LISTING_URL, {
		headers: { "Content-type": "application/json" },
		method,
	});

	const items = await response.json();

	searchItems(items);
	showCards(items);
}

export async function getBidInfoCard(id) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const getCardURL = API_AUCTION_LISTING_URL + id + action;

	const response = await fetch(getCardURL, {
		headers: { "Content-type": "application/json" },
		method,
	});

	return await response.json();
}
