const info = document.querySelector("#info-box");
const noListings = document.querySelector(".nothing");

/**
 * This function allows the tab function on profile page to work.
 * @param {Element} tabsListingsProfile This is a html element of listing tab.
 * @param {Element} tabsBidsProfile This is a html element of bids tab.
 * @param {Element} tabsWinsProfile This is a html element of wins tab.
 * @param {Element} box All the auction item cards.
 * @param {Number} listings Amount of listings made by target profile.
 * @param {Number} bids Amount of bids placed by target profile.
 * @param {Number} wins Amount of wins the target profile have.
 * @param {Element} noListings The html element containing no listing content.
 * @param {Element} info The html element containing bids and wins info content.
 */
export function profileTabs(listings, bids, wins, box) {
	const tabsListingsProfile = document.querySelector("#profile-listings");
	const tabsBidsProfile = document.querySelector("#profile-bids");
	const tabsWinsProfile = document.querySelector("#profile-wins");

	// Display bottom profile default
	if (listings === 0) {
		noListings.style.display = "block";
	}

	for (let x = listings; x < listings + bids; x++) {
		if (box[x]) {
			box[x].classList.add("d-none");
		}
	}

	for (let y = listings + bids; y < listings + bids + wins; y++) {
		if (box[y]) {
			box[y].classList.add("d-none");
		}
	}

	// Tab: Listings
	tabsListingsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		info.classList.add("d-none");
		tabsListingsProfile.classList.add("active");
		tabsBidsProfile.classList.remove("active");
		tabsWinsProfile.classList.remove("active");

		if (listings === 0) {
			noListings.style.display = "block";
		} else {
			noListings.style.display = "none";
		}

		for (let i = 0; i < listings; i++) {
			box[i].classList.remove("d-none");
		}
		for (let x = listings; x < listings + bids; x++) {
			if (box[x]) {
				box[x].classList.add("d-none");
			}
		}
		for (let y = listings + bids; y < listings + bids + wins; y++) {
			if (box[y]) {
				box[y].classList.add("d-none");
			}
		}
	});

	// Tab: Bids
	tabsBidsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		info.classList.remove("d-none");
		tabsBidsProfile.classList.add("active");
		tabsListingsProfile.classList.remove("active");
		tabsWinsProfile.classList.remove("active");

		if (bids === 0) {
			noListings.style.display = "block";
		} else {
			noListings.style.display = "none";
		}

		for (let i = 0; i < listings; i++) {
			box[i].classList.add("d-none");
		}
		for (let x = listings; x < listings + bids; x++) {
			if (box[x]) {
				box[x].classList.remove("d-none");
			}
		}
		for (let y = listings + bids; y < listings + bids + wins; y++) {
			if (box[y]) {
				box[y].classList.add("d-none");
			}
		}
	});

	// Tab: Wins
	tabsWinsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		info.classList.remove("d-none");
		tabsWinsProfile.classList.add("active");
		tabsListingsProfile.classList.remove("active");
		tabsBidsProfile.classList.remove("active");

		if (wins === 0) {
			noListings.style.display = "block";
		} else {
			noListings.style.display = "none";
		}

		for (let i = 0; i < listings; i++) {
			box[i].classList.add("d-none");
		}
		for (let x = listings; x < listings + bids; x++) {
			box[x].classList.add("d-none");
		}
		for (let y = listings + bids; y < listings + bids + wins; y++) {
			if (box[y]) {
				box[y].classList.remove("d-none");
			}
		}
	});
}
