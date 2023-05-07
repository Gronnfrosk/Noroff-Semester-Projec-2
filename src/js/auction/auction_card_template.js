//import { displayNumberOfCards } from "./auction_cards_display.js";
//import { filterItems } from "./filter_items.js";
//import { getAuctionItems } from "../api/auction/getItem.js";

const auctionCard = document.querySelector("#card-container");

export async function showCards(items) {
	for (var i = 0; i < items.length; i++) {
		if (items[i]) {
			// Time and date formatting now and deadline
			const deadline = new Date(items[i].endsAt);
			const dateFormat = deadline.toLocaleDateString("en-GB");
			const start = Date.now();
			const elapsed = deadline - start;
			var closed = "";
			var itemMedia;
			var itemBids;

			// Red clock when deadline passed
			if (elapsed < 0) {
				closed = "text-danger";
			}

			// Media or not media
			if (items[i].media[0] || items[i].media[1]) {
				itemMedia = `<img src="${items[i].media[0]}" alt="Auction item" class="fs-6 mx-auto text-center">`;
			} else if (!items[i].media || items[i].media.length === 0 || items[i].media === undefined) {
				itemMedia = `<p class="d-flex align-items-center border border-5 border-danger p-3 m-3 rounded-circle border-opacity-10 fw-bolder">No image available</p>`;
			}

			// Bids or not bids
			if (items[i]._count) {
				itemBids = `<div class="btn btn-dark btn-sm py-0 px-2">${items[i]._count.bids}</div>
						<p>Total number of bids</p>`;
			} else {
				itemBids = "";
			}

			// Template for auction cards
			auctionCard.innerHTML += `
			<div class="box" id="${items[i].id}">
				<div class="listing d-flex flex-column">
					<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/specific_auction_item.html?itemID=${items[i].id}">
						<div class="listing-image">
							${itemMedia}
						</div>
					</a>
					<div class="profile-info mx-auto w-100 mt-2">
						<div class="deadline text-end">
							<p><i class="fa-regular fa-clock ${closed}"></i> ${dateFormat}</p>
						</div>
						<div class="listing-info">
							<h4>${items[i].title}</h4>
							<div class="bid-info text-center gap-1 ">
								${itemBids}
							</div>
						</div>
					</div>
				</div>
			</div>`;
		}
	}
}
