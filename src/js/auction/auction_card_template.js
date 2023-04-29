const auctionCard = document.querySelector("#card-container");
const moreLoadBtn = document.querySelector("#moreBtn");
var loadCards = 20;

export async function showCards(items) {
	items.sort(function (a, b) {
		return new Date(b.endsAt) - new Date(a.endsAt);
	});
	items.reverse();

	function displayCard() {
		for (let i = 0; i < loadCards; i++) {
			function loadItem(item) {
				if (item) {
					const { id, title, description, tags, media, created, updated, endsAt, _count } = item;
					const { bids } = _count;
					const deadline = new Date(endsAt);
					const dateFormat = deadline.toLocaleDateString("en-GB");

					if (media[0]) {
						auctionCard.innerHTML += `
		        <div class="box" id="${id}">
		            <div class="listing d-flex flex-column">
						<a href="/html/specific_auction_item.html?itemID=${id}">
							<div class="listing-image">
								<img src="${media[0]}" alt="Auction item" class="fs-6 mx-auto text-center">
							</div>
						</a>
		                <div class="profile-info mx-auto w-100 mt-2">
		                    <div class="deadline text-end">
		                        <p><i class="fa-regular fa-clock"></i> ${dateFormat}</p>
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
					} else {
						auctionCard.innerHTML += `
		        <div class="box" id="${id}">
		            <div class="listing d-flex flex-column">
						<a href="/html/specific_auction_item.html?itemID=${id}">
							<div class="listing-image">
								<p class="d-flex align-items-center border border-5 border-danger p-3 m-3 rounded-circle border-opacity-10 fw-bolder">No image available</p>
							</div>
						</a>
		                <div class="profile-info mx-auto w-100 mt-2">
		                    <div class="deadline text-end">
		                        <p><i class="fa-regular fa-clock"></i> ${dateFormat}</p>
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
				}
			}
			loadItem(items[i]);
		}
	}
	displayCard();

	moreLoadBtn.addEventListener("click", (event) => {
		auctionCard.innerHTML = "";
		loadCards += 20;
		displayCard();
		console.log(loadCards);
		if (loadCards === 100) {
			moreLoadBtn.classList.add("d-none");
		}
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
