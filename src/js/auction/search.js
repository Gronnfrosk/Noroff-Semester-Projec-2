import { showCards } from "./auction_card_template.js";

const search = document.querySelector("#search_form");
const input = document.querySelector("#search_input");
const container = document.querySelector("#card-container");

export function searchItems(items) {
	input.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			container.innerHTML = "";
			const searchInput = e.target.value.trim().toLowerCase();
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
