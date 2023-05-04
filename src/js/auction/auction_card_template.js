const auctionCard = document.querySelector("#card-container");
const moreLoadBtn = document.querySelector("#moreBtn");
var loadCards = 20;
var startCards = 0;

export function showCards(items) {
	async function displayCards() {
		for (var i = startCards; i < loadCards; i++) {
			if (items[i]) {
				const deadline = new Date(items[i].endsAt);
				const dateFormat = deadline.toLocaleDateString("en-GB");
				const start = Date.now();
				const elapsed = deadline - start;

				async function itemMediaFunction() {
					let itemMedia;

					if (items[i].media[0]) {
						itemMedia = `<img src="${items[i].media[0]}" alt="Auction item" class="fs-6 mx-auto text-center">`;
					} else {
						itemMedia = `<p class="d-flex align-items-center border border-5 border-danger p-3 m-3 rounded-circle border-opacity-10 fw-bolder">No image available</p>`;
					}
					return itemMedia;
				}

				async function itemBidFunction() {
					let itemBids = "";

					if (items[i]._count) {
						itemBids = `<div class="btn btn-dark btn-sm py-0 px-2">${items[i]._count.bids}</div>
								<p>Total number of bids</p>`;
					}
					return itemBids;
				}

				const itemMedia = await itemMediaFunction();
				const itemBids = await itemBidFunction();

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
								<p><i class="fa-regular fa-clock"></i> ${dateFormat}</p>
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

				if (elapsed < 0) {
					const clockIcon = document.querySelectorAll(".fa-clock");

					clockIcon.forEach((element) => {
						element.classList.add("text-danger");
					});
				}
			}
		}
	}

	displayCards(items);

	if (items.length < 20) {
		moreLoadBtn.classList.add("d-none");
	}

	if (moreLoadBtn) {
		moreLoadBtn.addEventListener("click", (event) => {
			loadCards += 20;
			startCards += 20;

			displayCards(items);
			if (loadCards > 100) {
				moreLoadBtn.classList.add("d-none");
			}
		});
	}
}
