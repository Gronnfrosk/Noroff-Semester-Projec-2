import { load } from "../../localstorage/save_load_remove.js";
import { getItem } from "../../api/auction/getItem.js";
import { displayDeadline } from "./deadline.js";
import { displayBidForm } from "./bid_form.js";
import { displayBids } from "./specific_bids.js";
import { displaySeller } from "./seller.js";
import { displayMediaGallery } from "./media_gallery.js";
import { setCreateBidFormListener } from "./create_bid.js";

const mediaPlace = document.querySelector(".carousel-inner");
const nextPrevBtn = document.querySelectorAll(".slide-btn");
const containerOne = document.querySelector(".details-one");
const containerThree = document.querySelector(".bid-history");

/**
 * This async function uses data from API request GET with id to display a post in html with and without image.
 * @param {object} params iterate over key/value pairs in the same order as they appear in the query string.
 * @param {string} id The specific string gotten from the itemID querystring.
 * @function getItem() This async function sends an API "GET" request with an id and gets data for the target auction item listing.
 * @param {Object} profile This is the localStorage key with user profile data.
 * @param {Element} mediaPlace This is a html element where the auction item media gallery is displayed.
 * @param {Element} nextPrevBtn This is a html element where the carousel slide button.
 * @param {Element} containerOne This is a html element where the auction item title and description are displayed.
 * @param {Element} containerThree This is a html element where the auction item bid details are displayed.
 * @function displayMediaGallery() This function display media gallery in a carousel from the auction item media data.
 * @function displayBids() This async function display bid history from target auction item listing.
 * @function displayDeadline() This function displays date and time of target auction item deadline and icons change color to red when deadline is passed.
 * @function displayBidForm() This function displays bid form with max and min value, but disabled at certain situations and show text explaining why.
 * @function displaySeller() This function displays seller information as avatar and name.
 * @function setCreateBidFormListener() This function triggers by a form submit to collect form data and send to API if the form validation is successful.
 */
export async function specificAuctionItem() {
	const params = new URLSearchParams(document.location.search);
	const id = params.get("itemID");

	if (id) {
		const { id_, title, description, tags, media, created, updated, endsAt, seller, bids, _count } = await getItem(id);
		const profile = load("profile");

		mediaPlace.innerHTML += `
		<div class="carousel-item active h-100 border">
			<div class="image h-50 justify-content-center align-items-center h-100">
				<img src="https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais" alt="Auction item" class="bd-placeholder-img bd-placeholder-img-lg d-block p-1">
			</div>
		</div>
		`;

		containerOne.innerHTML = `
				<h1>${title}</h1>
				<p>${description}</p>
				`;

		containerThree.innerHTML = `<h2 class="bid-winner" id="0">No bid yet</h2>`;

		nextPrevBtn.forEach((element) => {
			element.classList.add("opacity-0");
		});

		if (media.length > 0) {
			displayMediaGallery(media);
		}

		if (bids[0]) {
			displayBids(profile, bids, _count.bids);
		}

		displayDeadline(endsAt);
		displayBidForm(profile, seller);
		displaySeller(seller);
		setCreateBidFormListener(id);
	} else {
		window.location.href = "./index.html";
	}
}
