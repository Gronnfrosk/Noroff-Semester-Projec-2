import { showCards } from "./auction_card_template.js";

const moreLoadBtn = document.querySelector("#moreBtn");
const auctionCard = document.querySelector("#card-container");
var n = 12;

/**
 * This function uses data from API request GET to filter and display 15 auction item cards in html and add 15 more when more button is clicked. Also display search auction item cards.
 * @param {Object} filterItems The filtered data of auction items.
 * @param {Object} items The filtered data of 15 auction items.
 * @function showCards() This function uses items data to display auction item cards in html with and without image.
 * @function searchItems() This function uses auction items title to display the search results when keypress enter or search button is clicked.
 * @param {Element} moreLoadBtn This is a html element button.
 * @param {Number} n The amount of auction item cards to display.
 */
export function displayNumberOfCards(filterItems) {
	const items = filterItems.slice(0, n);

	showCards(items);

	moreLoadBtn.addEventListener("click", (cards) => {
		auctionCard.innerHTML = ``;
		n += 12;
		const items = filterItems.slice(0, n);

		if (items.length > 99) {
			moreLoadBtn.classList.add("d-none");
		}
		showCards(items);
	});
}
