import { load } from "../../localstorage/save_load_remove.js";
import { getItem } from "../../api/auction/getItem.js";
import { displayDeadline } from "./deadline.js";
import { displayBidForm } from "./bid_form.js";
import { displayBids } from "./specific_bids.js";
import { displaySeller } from "./seller.js";
import { displayMediaGallery } from "./media_gallery.js";

const mediaPlace = document.querySelector(".carousel-inner");
const nextPrevBtn = document.querySelectorAll(".slide-btn");
const containerOne = document.querySelector(".details-one");
const containerThree = document.querySelector(".bid-history");

/**
 * This function uses data from API request GET to display a post in html with and without image.
 * @param {Object} post The data of one post.
 * @param {Element} container This is a html element where all generated posts data are displayed.
 * @param {String} dateFormat The format of when the post was created.
 * @param {String} postMedia This is the HTML content for post with image.
 * @param {String} editFeature This is the HTML content from edit and delete features.
 * @param {Object} user This is the value of the key profile in the localStorage
 */
export async function specificAuctionItem(item) {
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const id = params.get("itemID");
	const { id_, title, description, tags, media, created, updated, endsAt, seller, bids, _count } = await getItem(id);
	const profile = load("profile");

	// Display media and gallery
	mediaPlace.innerHTML += `
		<div class="carousel-item active h-100 border">
			<div class="image h-50 justify-content-center align-items-center h-100">
				<img src="https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais" alt="Auction item" class="bd-placeholder-img bd-placeholder-img-lg d-block p-1">
			</div>
		</div>
		`;

	nextPrevBtn.forEach((element) => {
		element.classList.add("opacity-0");
	});

	if (media.length > 0) {
		displayMediaGallery(media);
	}

	// Basic item info title, description and deadline
	containerOne.innerHTML = `
                    <h1>${title}</h1>
                    <p>${description}</p>
                    `;

	displayDeadline(endsAt);

	//Bid history
	containerThree.innerHTML = `<h2 class="bid-winner" id="0">No bid yet</h2>`;

	if (bids[0]) {
		displayBids(profile, bids, _count.bids);
	}

	// Bid input with min and max bid
	displayBidForm(profile, seller);

	// Seller of item
	displaySeller(seller);
}
