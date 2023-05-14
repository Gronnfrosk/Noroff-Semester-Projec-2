import { showCards } from "./auction_card_template.js";

const search = document.querySelector("#search_form button");
const input = document.querySelector("#search_input");
const container = document.querySelector("#card-container");
const moreLoadBtn = document.querySelector("#moreBtn");

/**
 * This function uses auction items title to display the search results when keypress enter or search button is clicked.
 * @param {Element} search This is a html element where search input is displayed.
 * @param {Element} input This is a html element input.
 * @param {String} searchInput This is the searched value in lowercase.
 * @function searchFiltered() It filters out auction items when item title and search value match.
 * @function showCards() This is a function for displaying auction item cards.
 */
export function searchItems(items) {
	search.addEventListener("click", function (e) {
		e.preventDefault();
		container.innerHTML = "";
		moreLoadBtn.classList.add("d-none");
		const searchInput = input.value.trim().toLowerCase();
		const searchFiltered = items.filter(function (items) {
			if (items.title.toLowerCase().trim().includes(searchInput)) {
				return true;
			}
		});
		showCards(searchFiltered);
	});

	input.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			e.preventDefault();
			container.innerHTML = "";
			moreLoadBtn.classList.add("d-none");
			const searchInput = e.target.value.trim().toLowerCase();
			const searchFiltered = items.filter(function (items) {
				if (items.title.toLowerCase().trim().includes(searchInput)) {
					return true;
				}
			});
			showCards(searchFiltered);
		}
	});
}
