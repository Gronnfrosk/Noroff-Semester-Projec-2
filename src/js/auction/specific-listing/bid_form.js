const bidInputPlace = document.querySelector("#bidding");
const inputField = document.querySelector("#create-bid");
const bidInput = document.querySelector("#bid-input");

/**
 * This function displays bid form with max and min value, but disabled at certain situations and show text explaining why.
 * @param {number} minCredit The amount of current highest bid plus one gotten from the id of a html element.
 * @param {string} maxCredit The amount users current total credit gotten from the id of a html element.
 * @param {Object} profile This is the localStorage key with user profile data.
 * @param {Object} seller This contains data about target auction item seller.
 * @param {Element} bidInputPlace This is a html element where the input for placing bid.
 * @param {Element} inputField This is a html element form for placing bid.
 * @param {Element} bidInput This is a html element where disabled text show.
 * @setTimeout Contents load after 0.5 second.
 */
export function displayBidForm(profile, seller) {
	setTimeout(() => {
		const minCredit = parseInt(document.querySelector(".bid-winner").id) + 1;
		var maxCredit = 0;

		if (profile !== null) {
			maxCredit = document.querySelector(".nav-credit p").id;
		}

		bidInputPlace.innerHTML = `
                <div class="col-auto mb-1">
                	<span id="recent-bid" class="form-text">
                	Lowest acceptable bid:
                	</span>
                </div>
                <input id="validationCustom00" value="${minCredit}" type="number" class="form-control" required name="amount" min="${minCredit}" max="${maxCredit}"/>
                <div class="invalid-feedback mb-3">The bid must be above highest</div>
                <label for="validationCustom00 form-label">Credit</label>
				<div class="mx-auto my-2">
					<button class="btn btn-info add-item px-5">Confirm bid</button>
				</div>
            `;

		if (profile === null || seller.name === profile.name || minCredit > maxCredit) {
			inputField.classList.add("disabled");

			if (profile === null) {
				bidInput.innerHTML += `<p class="text-center my-3 text-danger fw-bold">Only those who are logged in with an registered account at AuctionPoint can bid on this item and get more details.</p>`;
			} else if (seller.name === profile.name) {
				bidInput.innerHTML += `<p class="text-center my-3 text-danger fw-bold">You can not bid on your own listings.</p>`;
			} else if (minCredit > maxCredit) {
				bidInput.innerHTML += `<p class="text-center my-3 text-danger fw-bold">You do not have enough Credits to bid on this item.</p>`;
			}
		}
	}, 500);
}
