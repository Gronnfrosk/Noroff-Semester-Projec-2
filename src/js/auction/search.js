import { showCards } from "./auction_card_template.js";

const search = document.querySelector("#search_form");
const input = document.querySelector("#search_input");
const container = document.querySelector("#card-container");

export function searchItems(items) {
	search.onkeyup = function (event) {
		container.innerHTML = "";
		const searchInput = event.target.value.trim().toLowerCase();
		const searchFiltered = items.filter(function (items) {
			if (items.title.toLowerCase().includes(searchInput)) {
				return true;
			}
		});
		showCards(searchFiltered);
	};

	input.addEventListener("keypress", function (e) {
		container.innerHTML = "";
		const searchInput = e.target.value.trim().toLowerCase();
		if (e.key === "Enter") {
			e.preventDefault();
			const searchFiltered = items.filter(function (items) {
				if (items.title.toLowerCase().trim().includes(searchInput)) {
					return true;
				}
			});
			showCards(searchFiltered);
		}
	});
}
