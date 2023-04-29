const auctionCard = document.querySelector("#card-container");
const moreLoadBtn = document.querySelector("#moreBtn");
var loadCards = 20;

export async function showCards(items) {
	const params = new URLSearchParams(window.location.search);
	const filterParam = params.get("filter");

	if (filterParam === null || filterParam === "" || filterParam === "old") {
		//Newest;
		items.sort(function (a, b) {
			return new Date(b.created) - new Date(a.created);
		});

		// Oldest
		if (filterParam === "old") {
			items.reverse();
		}
	}

	if (filterParam === "short" || filterParam === "long") {
		// deadline longest
		items.sort(function (a, b) {
			return new Date(b.endsAt) - new Date(a.endsAt);
		});

		// deadline closest
		if (filterParam === "short") {
			items.reverse();
		}
	}

	if (filterParam === "bids") {
		// Most bids
		items.sort(function (a, b) {
			return b._count.bids - a._count.bids;
		});
	}

	function displayCard() {
		for (let i = 0; i < loadCards; i++) {
			function loadItem(item) {
				if (item) {
					const { id, title, description, tags, media, created, updated, endsAt, _count } = item;
					const { bids } = _count;
					const deadline = new Date(endsAt);
					const dateFormat = deadline.toLocaleDateString("en-GB");
					const start = Date.now();
					const elapsed = deadline - start;

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
					if (elapsed < 0) {
						const clockIcon = document.querySelectorAll(".fa-clock");

						clockIcon.forEach((element) => {
							element.classList.add("text-danger");
						});
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
		if (loadCards === 100) {
			moreLoadBtn.classList.add("d-none");
		}
	});
}
