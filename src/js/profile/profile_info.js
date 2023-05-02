import { load } from "../localstorage/save_load_remove.js";
import { getProfile, getProfileListings, getProfileBids } from "../api/profile/get_profile.js";
import { filterItems } from "../auction/filter_items.js";
import { searchItems } from "../auction/search.js";
import { showCards } from "../auction/auction_card_template.js";

const profileAvatar = document.querySelector("#avatar");
const profileContainer = document.querySelector("#profile-detail");
const auctionCard = document.querySelector("#card-container");
const tabsListingsProfile = document.querySelector("#profile-listings");
const tabsBidsProfile = document.querySelector("#profile-bids");
const tabsWinsProfile = document.querySelector("#profile-wins");

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image are displayed.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 */
export async function displayProfile() {
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const nameOther = params.get("nameID");
	const profile = load("profile");

	// check if profile is myself or other user
	async function anotherProfile() {
		let profileInfo;

		if (!nameOther || nameOther === profile) {
			profileInfo = await getProfile(profile.name);
		} else {
			profileInfo = await getProfile(nameOther.name);
		}
		return profileInfo;
	}

	const profileInfo = await anotherProfile();
	const profileWins = profileInfo.wins;

	profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Image for the user: ${profileInfo.name}" class="pe-0 avatar">`;

	profileContainer.innerHTML += `<div class="profile-info mx-auto">
		<div class="name text-center"><h2>${profileInfo.name}</h2></div>
		<div class="email text-center"><p>${profileInfo.email}</p></div>
		<div class="credit mx-auto text-center mt-2"><p class="">Total Credit - ${profileInfo.credits}</p></div>
	</div>`;

	const tabsParam = params.get("tabs");

	if (tabsParam === null || tabsParam === "") {
		tabsListingsProfile.classList.add("active");

		const profileListings = await getProfileListings(profile.name);
		filterItems(profileListings);
		searchItems(profileListings);
	} else if (tabsParam === "bids") {
		tabsBidsProfile.classList.add("active");
		const profileBids = await getProfileBids(profile.name);
		const result = profileBids.map((a) => a.listing);

		showCards(result);
		searchItems(result);
	} else if (tabsParam === "wins") {
		tabsWinsProfile.classList.add("active");
		const profileBids = await getProfileBids(profile.name);
		const result = profileBids.map((a) => a.listing);

		for (var i = 0; i < profileWins.length; i++) {
			const winsResult = result.filter((a) => {
				return a.id === profileWins[i];
			});

			showCards(winsResult);
			searchItems(winsResult);
		}
	}
}
