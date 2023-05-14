import { profileContent } from "./profile_template.js";
import { getProfileListings, getProfileBids } from "../api/profile/get_profile.js";
import { showCards } from "../auction/all-listings/auction_card_template.js";
import { anotherProfile } from "./profile_who.js";
import { profileTabs } from "./profile_tabs.js";

const auctionCard = document.querySelector("#card-container");

/**
 * This async function uses multiple API request to display the user profile or another user profile.
 * @param {Object} profile This is profile data and credit content after checking if it is user profile or another user profile.
 * @param {Object} profileListings This is data over all the listings to the target profile.
 * @function showCards() This function uses items/listings data to display auction item cards in html with and without image.
 * @param {Object} profileBids This is data over profile and all the item/listings that the target profile have placed bids on.
 * @param {Object} resultAll This is data over all the item/listings that the target profile have placed bids on.
 * @param {Object} result This is data over all the item/listings that the target profile have placed bids on. Repetitive items are removed.
 * @param {Object} profileWins This is the id of every listing/item the target profile have won.
 * @param {Object} winsResult Data over listings that the profile have won.
 * @function profileContent() This function displays target profiles avatar, profile details (name, email and credit) and tabs (listings, bids and wins).
 * @param {Element} box All the auction item cards.
 * @param {Number} listings Amount of listings made by target profile.
 * @param {Number} bids Amount of bids placed by target profile.
 * @param {Number} wins Amount of wins the target profile have.
 * @param {Element} auctionCard This is a html element where auction item cards are displayed.
 */
export async function displayProfile() {
	// Display profile listings
	const profile = await anotherProfile();
	const profileListings = await getProfileListings(profile.profileInfo.name);

	showCards(profileListings);

	// Display profile bids
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
