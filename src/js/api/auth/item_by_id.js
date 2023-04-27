import { API_AUCTION_LISTING_URL } from "../constants.js";
import { showCard } from "../../auction/auction_card_template.js";

const action = "?_bids=true";
const method = "get";

export async function getAuctionItems() {
	const response = await fetch(API_AUCTION_LISTING_URL, {
		headers: { "Content-type": "application/json" },
		method,
	});

	const items = await response.json();

	showCard(items);
}

export async function getBidInfoCard(id) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const getCardURL = API_AUCTION_LISTING_URL + id + action;

	const responseId = await fetch(getCardURL, {
		headers: { "Content-type": "application/json" },
		method,
	});

	const { _id, title, description, tags, media, created, updated, endsAt, seller, bids, _count } = await responseId.json();

	//const { name, email, avatar } = seller;
	const { id_, amount, bidderName, _crated } = bids;

	if (id_ !== undefined) {
		console.log(bids[0]);
	}
}
