const newList = document.querySelector("#newest");
const oldestList = document.querySelector("#oldest");
const shortestList = document.querySelector("#shortest");
const longestList = document.querySelector("#longest");
const bidsList = document.querySelector("#bids");

/**
 * This async function filters the array of auction items based on query string parameters and adds active class to target filter.
 * @param {object} items this is a list of auction items.
 * @param {object} params iterate over key/value pairs in the same order as they appear in the query string.
 * @param {string} filterParam The specific string gotten from the filter querystring.
 * @param {Element} newList The html element in filter dropdown. To filters auction items by when listing/item was created from newest to oldest.
 * @param {Element} shortestList The html element in filter dropdown. To filters auction items by shortest deadline.
 * @param {Element} longestList The html element in filter dropdown. To filters auction items by longest deadline.
 * @param {Element} oldestList The html element in filter dropdown. To filters auction items by when listing/item was created from oldest to newest.
 * @param {Element} bidsList The html element in filter dropdown. To filters auction items by most bids first.
 */
export async function getFilterItems(items) {
	const params = new URLSearchParams(window.location.search);
	const filterParam = params.get("filter");
	const awaited = await items;

	if (filterParam === null || filterParam === "" || filterParam === "new" || filterParam === "old" || !filterParam) {
		// Newest
		awaited.sort(function (a, b) {
			return new Date(b.created) - new Date(a.created);
		});

		// Oldest
		if (filterParam === "old") {
			awaited.reverse();

			newList.classList.remove("active");
			oldestList.classList.add("active");
		}
	}

	if (filterParam === "short" || filterParam === "long") {
		// deadline longest
		awaited.sort(function (a, b) {
			return new Date(b.endsAt) - new Date(a.endsAt);
		});

		newList.classList.remove("active");
		longestList.classList.add("active");

		// deadline closest
		if (filterParam === "short") {
			awaited.reverse();

			newList.classList.remove("active");
			shortestList.classList.add("active");
			longestList.classList.remove("active");
		}
	}

	if (filterParam === "bids") {
		// Most bids
		awaited.sort(function (a, b) {
			return b._count.bids - a._count.bids;
		});

		newList.classList.remove("active");
		bidsList.classList.add("active");
	}

	return items;
}
