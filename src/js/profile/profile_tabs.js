const sortCreate = document.querySelector(".created");
const sortDeadline = document.querySelector(".deadline");
const info = document.querySelector("#info-box");
const noListings = document.querySelector(".nothing");

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

	// Listings
	tabsListingsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		info.classList.add("d-none");
		tabsListingsProfile.classList.add("active");
		tabsBidsProfile.classList.remove("active");
		tabsWinsProfile.classList.remove("active");
		sortCreate.classList.remove("d-none");
		sortDeadline.classList.add("d-none");

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

	// Bids
	tabsBidsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		info.classList.remove("d-none");
		tabsBidsProfile.classList.add("active");
		tabsListingsProfile.classList.remove("active");
		tabsWinsProfile.classList.remove("active");
		sortCreate.classList.remove("d-none");
		sortDeadline.classList.add("d-none");

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

	// Wins
	tabsWinsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		info.classList.remove("d-none");
		tabsWinsProfile.classList.add("active");
		tabsListingsProfile.classList.remove("active");
		tabsBidsProfile.classList.remove("active");
		sortCreate.classList.add("d-none");
		sortDeadline.classList.remove("d-none");

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
