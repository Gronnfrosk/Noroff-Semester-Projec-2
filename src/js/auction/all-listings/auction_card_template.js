const auctionCard = document.querySelector("#card-container");

/**
 * This function uses items data to display auction item cards in html with and without image.
 * @param {Object} items The data of auction items.
 * @param {Element} auctionCard This is a html element where all generated posts data are displayed.
 * @param {String} dateFormat A format of deadline date.
 * @param {String} start The current date and time.
 * @param {String} elapsed The deadline subtracted from the current date and time.
 * @param {String} closed This is the HTML class content icon.
 * @param {String} itemMedia This is the HTML content for media in auction item card.
 * @param {String} itemBids This is the HTML content for bids on auction item.
 * @param {String} home This is the HTML to get correct link for specific auction item.
 */
export async function showCards(items) {
	for (var i = 0; i < items.length; i++) {
		if (items[i]) {
			// Time and date formatting current and deadline
			const deadline = new Date(items[i].endsAt);
			const dateFormat = deadline.toLocaleDateString("en-GB");
			const start = Date.now();
			const elapsed = deadline - start;
			var closed = "";
			var itemMedia;
			var itemBids;
			var home = "";

			// Red clock when deadline passed
			if (elapsed < 0) {
				closed = "text-danger";
			}

			// Media
			if (items[i].media[0]) {
				itemMedia = `<img src="${items[i].media[0]}" alt="Auction item" class="fs-6 mx-auto text-center" onerror="this.src='https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais'">`;
			} else if (!items[i].media || items[i].media.length === 0 || items[i].media === undefined) {
				itemMedia = `<img src="https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais" alt="Auction item" class="fs-6 mx-auto text-center">`;
			}

			// Bids
			if (items[i]._count) {
				itemBids = `<div class="btn btn-dark btn-sm py-0 px-2 mb-1">${items[i]._count.bids}</div>
						<p>Total number of bids</p>`;
			} else {
				itemBids = "";
			}

			//Specific link for auction item cards
			if (location.pathname === "/index.html") {
				home = "html/";
			}

			if (location.pathname === "/Noroff-Semester-Project-2/" || location.pathname === "/Noroff-Semester-Project-2/index.html") {
				if (location.pathname !== "/Noroff-Semester-Project-2/html/profile.html") {
					home = "html/";
				}
			}

			// Template for auction cards
			auctionCard.innerHTML += `
			<div class="box" id="${items[i].id}">
				<div class="listing d-flex flex-column">
					<a href="${home}specific_auction_item.html?itemID=${items[i].id}">
						<div class="listing-image">
							${itemMedia}
						</div>
					</a>
					<div class="profile-info mx-auto w-100 mt-2">
						<div class="deadline text-end">
							<p><i class="fa-regular fa-clock ${closed}"></i> ${dateFormat}</p>
						</div>
						<div class="listing-info">
							<h3>${items[i].title}</h3>
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
