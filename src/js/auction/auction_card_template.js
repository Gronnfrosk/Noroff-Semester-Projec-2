const auctionCard = document.querySelector("#card-container");
const moreLoadBtn = document.querySelector("#moreBtn");
let loadCards = 3;

export async function showCards(items) {
	for (let i = 0; i < loadCards; i++) {
		function loadItem(item) {
			const { id, title, description, tags, media, created, updated, endsAt, _count } = item;
			const { bids } = _count;
			const deadline = new Date(endsAt);
			const dateFormat = deadline.toLocaleDateString("en-GB");

			//const biddingData = getBidInfoCard(id);
			//console.log(biddingData);

			auctionCard.innerHTML += `
		        <div class="box" id="${id}">
		            <div class="listing d-flex flex-column">
		                <div class="no-img">No image</div>
		                <div class="listing-image">
		                <img src="${media[0]}" alt="Auction item" class="fs-6 mx-auto text-center">
		                </div>
		                <div class="profile-info mx-auto w-100 mt-2">
		                    <div class="deadline text-end">
		                        <p><i class="fa-regular fa-clock"></i>${dateFormat}</p>
		                    </div>
		                    <div class="listing-info">
								<h4>${title}</h4>
		                        <div class="bid-info text-center gap-1 ">
									<div class="btn btn-dark btn-sm py-0 px-2">${bids}</div>
									<p>Total number of bids</p>
								</div>
		                    </div>
		                </div>
		            </div>
		        </div>`;
		}
		loadItem(items[i]);
	}
	moreLoadBtn.addEventListener("click", (event) => {
		auctionCard.innerHTML = "";

		showCards(items);
		loadCards += 3;
	});
}

//const cardId = document.querySelectorAll(".box")[i].id;
//const bidInfo = document.querySelectorAll(".bid-info")[i];
//const { idbid, titleBid, descriptionBid, tagsBid, mediaBid, createdBid, updatedBid, endsAtBid, seller, bids, _countBid } = await getBidInfoCard(cardId);
//
//console.log(await getBidInfoCard(cardId));
//if (bids[i] === undefined) {
//	bidInfo.innerHTML = "";
//	bidInfo.innerHTML += `<div class=""><p>0</div>`;
//} else {
//	bidInfo.innerHTML = "";
//	const bidDetails = bids.sort((a, b) => a.amount - b.amount).reverse();
//	bidInfo.innerHTML += `<div class="" id="${bids[0].amount}"><p>${bids[0].amount} credit - ${bids[0].bidderName}</p></div>`;
//}
