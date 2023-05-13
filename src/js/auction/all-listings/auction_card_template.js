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
				itemMedia = `<img src="${items[i].media[0]}" alt="Auction item" class="fs-6 mx-auto text-center" onerror="this.src='data:image/png;base64,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'">`;
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
