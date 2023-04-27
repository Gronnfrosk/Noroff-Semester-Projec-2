import { getBidInfoCard } from "../api/auth/item_by_id.js";

export function showCard(items) {
	const auctionCardImg = document.querySelector("#card-container");
	const moreLoadBtn = document.querySelector("#moreBtn");

	const loadCards = 20;

	for (let i = 0; i < loadCards; i++) {
		console.log(items[i]);

		function loadItem(item) {
			//items[i].forEach(function (item) {}
			const { id, title, description, tags, media, created, updated, endsAt, _count } = item;
			const { bid } = _count;
			const deadline = new Date(endsAt);
			const dateFormat = deadline.toLocaleDateString("en-GB");
			//getBidInfoCard(id);
			//const bidInfo = `<p>${amount} credit - ${bidderName} </p>`;

			auctionCardImg.innerHTML += `
		        <div class="box">
		            <div class="listing d-flex flex-column justify-content-center">
		                <div class="no-img">No image</div>
		                <div class="listing-image">
		                <img src="${media[0]}" alt="Auction item" class="fs-6 mx-auto text-center">
		                </div>
		                <div class="profile-info mx-auto w-100 mt-2">
		                    <div class="deadline text-end">
		                        <p><i class="fa-regular fa-clock"></i> ${dateFormat}</p>
		                    </div>
		                    <div class="listing-info">
		                        <h4>${title}</h4>
		                        <p>Most recent bid:</p>
		                        <div class="bid-info"></div>
		                    </div>
		                </div>
		            </div>
		        </div>`;
		}
		loadItem(items[i]);
	}
}
