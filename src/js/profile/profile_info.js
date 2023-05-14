import { profileContent } from "./profile_template.js";
import { getProfileListings, getProfileBids } from "../api/profile/get_profile.js";
import { showCards } from "../auction/all-listings/auction_card_template.js";
import { anotherProfile } from "./profile_who.js";
import { profileTabs } from "./profile_tabs.js";

const auctionCard = document.querySelector("#card-container");

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image are displayed.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 */
export async function displayProfile() {
	// Profile info
	const profile = await anotherProfile();

	// Display listings
	const profileListings = await getProfileListings(profile.profileInfo.name);
	showCards(profileListings);

	// Display bids
	const profileBids = await getProfileBids(profile.profileInfo.name);
	const resultAll = profileBids.map((a) => a.listing);
	const result = resultAll.filter((value, index, self) => self.findIndex((value2) => value2.id === value.id) === index);

	showCards(result);

	// Display profile wins
	const profileWins = profile.profileInfo.wins;
	profileWins.reverse();

	for (var z = 0; z < profileWins.length; z++) {
		const winsResult = result.filter((a) => {
			return a.id === profileWins[z];
		});

		showCards(winsResult);
	}

	// Display top profile template
	profileContent(profile.profileInfo, profileBids.length, profileWins.length, profile.creditContent);

	const box = auctionCard.children;
	const listings = profileListings.length;
	const bids = result.length;
	const wins = profileWins.length;

	// Tabs function: Listings, bids, wins
	profileTabs(listings, bids, wins, box);
}
