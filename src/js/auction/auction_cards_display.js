import { showCards } from "./auction_card_template.js";
import { getFilterItems } from "./filter_items.js";
import { getAuctionItems } from "../api/auction/getItem.js";

const moreLoadBtn = document.querySelector("#moreBtn");
const auctionCard = document.querySelector("#card-container");
var n = 15;

export async function displayNumberOfCards() {
	const response = getAuctionItems();
	const filterItems = await getFilterItems(response);
	const items = filterItems.slice(0, n);

	showCards(items);

	// Display of more button and adding more cards by click
	if (items.length < 15 || items.length > 99) {
		moreLoadBtn.classList.add("d-none");
	}

	moreLoadBtn.addEventListener("click", (cards) => {
		auctionCard.innerHTML = ``;
		n += 15;
		const items = response.slice(0, n);

		showCards(items);
	});
}
