const newList = document.querySelector("#newest");
const oldestList = document.querySelector("#oldest");
const shortestList = document.querySelector("#shortest");
const longestList = document.querySelector("#longest");
const bidsList = document.querySelector("#bids");

export async function getFilterItems(items) {
	const params = new URLSearchParams(window.location.search);
	const filterParam = params.get("filter");
	const awaited = await items;

	if (filterParam === null || filterParam === "" || filterParam === "new" || filterParam === "old" || !filterParam) {
		//Newest;
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
