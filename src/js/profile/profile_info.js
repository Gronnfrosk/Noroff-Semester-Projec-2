import { load } from "../localstorage/save_load_remove.js";
import { getProfile, getProfileListings, getProfileBids } from "../api/profile/get_profile.js";
import { getFilterItems } from "../auction/filter_items.js";
import { searchItems } from "../auction/search.js";
import { showCards } from "../auction/auction_card_template.js";

const profileAvatar = document.querySelector("#avatar");
const profileContainer = document.querySelector("#profile-detail");
const editAvatar = document.querySelector("#edit-avatar");
const addItem = document.querySelector(".add-item");
const navTabs = document.querySelector(".nav-tabs");

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image are displayed.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 */
export async function displayProfile() {
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const nameOther = params.get("name");
	const tabsParam = params.get("tabs");
	const profile = load("profile");

	// check if profile is myself or other user
	async function anotherProfile() {
		let profileInfo;
		let creditContent;

		if (!nameOther || nameOther === profile.name) {
			profileInfo = await getProfile(profile.name);
			creditContent = `<div class="credit mx-auto text-center mt-2"><p class="">Total Credit - ${profileInfo.credits}</p></div>`;
		} else if (profile.name !== nameOther) {
			profileInfo = await getProfile(nameOther);
			creditContent = `<div class="credit mx-auto text-center mt-2"><p class=""></p></div>`;
			editAvatar.classList.add("opacity-0");
			editAvatar.classList.add("disabled");
			addItem.classList.add("disabled");
			addItem.classList.add("text-info");
		} else {
			alert("No name found");
		}
		return { profileInfo, creditContent };
	}

	const profileInfo = (await anotherProfile()).profileInfo;
	const credit = (await anotherProfile()).creditContent;
	const profileWins = profileInfo.wins;
	const profileBids = await getProfileBids(profileInfo.name);
	const result = profileBids.map((a) => a.listing);
	console.log(profileInfo);

	navTabs.innerHTML = `
			<li class="nav-item">
				<a class="nav-link" id="profile-listings" aria-current="page" data-toggle="tab" href="?name=${profileInfo.name}">Listings (${profileInfo._count.listings})</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="profile-bids" href="?name=${profileInfo.name}&tabs=bids" data-toggle="tab">Bids (${profileBids.length})</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="profile-wins" href="?name=${profileInfo.name}&tabs=wins" data-toggle="tab">Wins (${profileWins.length})</a>
			</li>
				`;

	profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Image for the user: ${profileInfo.name}" class="pe-0 avatar">`;

	profileContainer.innerHTML += `<div class="profile-info mx-auto">
		<div class="name text-center"><h2>${profileInfo.name}</h2></div>
		<div class="email text-center"><p>${profileInfo.email}</p></div>
		${credit}
	</div>`;

	const tabsListingsProfile = document.querySelector("#profile-listings");
	const tabsBidsProfile = document.querySelector("#profile-bids");
	const tabsWinsProfile = document.querySelector("#profile-wins");

	if (tabsParam === null || tabsParam === "") {
		tabsListingsProfile.classList.add("active");
		const profileListings = await getProfileListings(profileInfo.name);

		getFilterItems(profileListings);
		searchItems(profileListings);
	} else if (tabsParam === "bids") {
		tabsBidsProfile.classList.add("active");

		showCards(result);
		searchItems(result);
	} else if (tabsParam === "wins") {
		tabsWinsProfile.classList.add("active");

		// Sort bids on listing by deadline
		result.sort(function (a, b) {
			return new Date(b.endsAt) - new Date(a.endsAt);
		});

		for (var i = 0; i < profileWins.length; i++) {
			const winsResult = result.filter((a) => {
				return a.id === profileWins[i];
			});
			//console.log(winsResult);

			showCards(winsResult);
			searchItems(winsResult);
		}
	}
}
