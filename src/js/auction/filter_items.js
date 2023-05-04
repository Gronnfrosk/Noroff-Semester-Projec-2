//import { showCards } from "./auction_card_template.js";

export async function getFilterItems(items) {
	const params = new URLSearchParams(window.location.search);
	const filterParam = params.get("filter");
	const awaited = await items;

	if (filterParam === null || filterParam === "" || filterParam === "old" || !filterParam) {
		//Newest;
		awaited.sort(function (a, b) {
			return new Date(b.created) - new Date(a.created);
		});

		// Oldest
		if (filterParam === "old") {
			awaited.reverse();
		}
	}

	if (filterParam === "short" || filterParam === "long") {
		// deadline longest
		awaited.sort(function (a, b) {
			return new Date(b.endsAt) - new Date(a.endsAt);
		});

		// deadline closest
		if (filterParam === "short") {
			awaited.reverse();
		}
	}

	if (filterParam === "bids") {
		// Most bids
		awaited.sort(function (a, b) {
			return b._count.bids - a._count.bids;
		});
	}

	return items;
}
