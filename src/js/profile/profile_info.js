import { load } from "../localstorage/save_load_remove.js";
import { getProfile, getProfileListings, getProfileBids } from "../api/profile/get_profile.js";
import { showCards } from "../auction/auction_card_template.js";
import { filterItems } from "../auction/filter_items.js";

const profileAvatar = document.querySelector("#avatar");
const profileContainer = document.querySelector("#profile-detail");

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

	if (!nameOther || nameOther === profile) {
		const profileInfo = await getProfile(profile.name);
		console.log(profileInfo);
		profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Image for the user: ${profileInfo.name}" class="pe-0 avatar">`;

		profileContainer.innerHTML += `<div class="profile-info mx-auto">
			<div class="name text-center"><h2>${profileInfo.name}</h2></div>
			<div class="email text-center"><p>${profileInfo.email}</p></div>
			<div class="credit mx-auto text-center mt-2"><p class="">Total Credit - ${profileInfo.credits}</p></div>
		</div>`;
	} else {
		const profileInfo = await getProfile(nameOther.name);

		profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Image for the user: ${profileInfo.name}" class="pe-0 avatar">`;

		profileContainer.innerHTML += `<div class="profile-info mx-auto">
			<div class="name text-center"><h2>${profileInfo.name}</h2></div>
			<div class="email text-center"><p>${profileInfo.email}</p></div>
		</div>`;
	}

	if (!nameOther) {
		const profileListings = await getProfileListings(profile.name);
		const profileBids = await getProfileBids(profile.name);

		console.log(profileBids);

		filterItems(profileListings);
	} else {
		const profileListings = await getProfileListings(nameOther.name);
		const profileBids = await getProfileBids(nameOther.name);

		showCards(profileListings);
	}
}
