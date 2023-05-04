import { profileContent } from "./profile_template.js";
import { getProfile, getProfileListings, getProfileBids } from "../api/profile/get_profile.js";
import { getFilterItems } from "../auction/filter_items.js";
import { searchItems } from "../auction/search.js";
import { showCards } from "../auction/auction_card_template.js";
import { anotherProfile } from "./profile_who.js";

const auctionCard = document.querySelector("#card-container");
const sortCreate = document.querySelector(".created");
const sortDeadline = document.querySelector(".deadline");

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image are displayed.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 */
export async function displayProfile() {
	const profile = await anotherProfile();
	const profileWins = profile.profileInfo.wins;
	const profileBids = await getProfileBids(profile.profileInfo.name);
	const result = profileBids.map((a) => a.listing);

	profileContent(profile.profileInfo, profileBids.length, profileWins.length, profile.creditContent);

	const profileListings = await getProfileListings(profile.profileInfo.name);

	const tabsListingsProfile = document.querySelector("#profile-listings");
	const tabsBidsProfile = document.querySelector("#profile-bids");
	const tabsWinsProfile = document.querySelector("#profile-wins");

	showCards(profileListings);
	searchItems(profileListings);

	showCards(result);
	searchItems(result);

	let winsResult;

	for (var z = 0; z < profileWins.length; z++) {
		winsResult = result.filter((a) => {
			return a.id === profileWins[z];
		});

		showCards(winsResult);
		searchItems(winsResult);
	}

	const box = auctionCard.children;
	var listings = profileListings.length;
	var bids = result.length;
	var wins = profileWins.length;

	for (let x = listings; x < listings + bids; x++) {
		box[x].classList.add("d-none");
	}

	for (let y = listings + bids; y < listings + bids + wins; y++) {
		if (box[y]) {
			box[y].classList.add("d-none");
		}
	}

	tabsListingsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		tabsListingsProfile.classList.add("active");
		tabsBidsProfile.classList.remove("active");
		tabsWinsProfile.classList.remove("active");
		sortCreate.classList.remove("d-none");
		sortDeadline.classList.add("d-none");

		for (let i = 0; i < listings; i++) {
			box[i].classList.remove("d-none");
		}
		for (let x = listings; x < listings + bids; x++) {
			box[x].classList.add("d-none");
		}
		for (let y = listings + bids; y < listings + bids + wins; y++) {
			if (box[y]) {
				box[y].classList.add("d-none");
			}
		}
	});

	tabsBidsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		tabsBidsProfile.classList.add("active");
		tabsListingsProfile.classList.remove("active");
		tabsWinsProfile.classList.remove("active");
		sortCreate.classList.remove("d-none");
		sortDeadline.classList.add("d-none");

		for (let i = 0; i < listings; i++) {
			box[i].classList.add("d-none");
		}
		for (let x = listings; x < listings + bids; x++) {
			box[x].classList.remove("d-none");
		}
		for (let y = listings + bids; y < listings + bids + wins; y++) {
			if (box[y]) {
				box[y].classList.add("d-none");
			}
		}
	});

	tabsWinsProfile.addEventListener("click", (e) => {
		e.preventDefault();
		tabsWinsProfile.classList.add("active");
		tabsListingsProfile.classList.remove("active");
		tabsBidsProfile.classList.remove("active");
		sortCreate.classList.add("d-none");
		sortDeadline.classList.remove("d-none");

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
