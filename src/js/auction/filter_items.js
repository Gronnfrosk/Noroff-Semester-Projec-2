import { showCards } from "./auction_card_template.js";

export function filterItems(items) {
	const params = new URLSearchParams(window.location.search);
	const filterParam = params.get("filter");

	if (filterParam === null || filterParam === "" || filterParam === "old") {
		//Newest;
		items.sort(function (a, b) {
			return new Date(b.created) - new Date(a.created);
		});

		// Oldest
		if (filterParam === "old") {
			items.reverse();
		}
	}

	if (filterParam === "short" || filterParam === "long") {
		// deadline longest
		items.sort(function (a, b) {
			return new Date(b.endsAt) - new Date(a.endsAt);
		});

		// deadline closest
		if (filterParam === "short") {
			items.reverse();
		}
	}

	if (filterParam === "bids") {
		// Most bids
		items.sort(function (a, b) {
			return b._count.bids - a._count.bids;
		});
	}

	showCards(items);
}
