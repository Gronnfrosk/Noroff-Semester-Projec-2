const bidInputPlace = document.querySelector("#bidding");
const inputField = document.querySelector("#create-bid");
const bidInput = document.querySelector("#bid-input");

export function displayBidForm(profile) {
	setTimeout(() => {
		var maxCredit = 0;

		if (profile) {
			maxCredit = document.querySelector(".nav-credit p").id;
		}

		const minCredit = parseInt(document.querySelector(".bid-winner").id) + 1;

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

		if (!profile || seller.name === profile.name || minCredit > maxCredit) {
			inputField.classList.add("disabled");

			if (!profile) {
				bidInput.innerHTML += `<p class="text-center my-3 text-danger fw-bold">You need to register or login to an account to add new bid.</p>`;
			} else if (seller.name === profile.name) {
				bidInput.innerHTML += `<p class="text-center my-3 text-danger fw-bold">You can not bid on your own listings.</p>`;
			} else if (minCredit > maxCredit) {
				bidInput.innerHTML += `<p class="text-center my-3 text-danger fw-bold">You do not have enough Credits to bid on this item.</p>`;
			}
		}
	}, 700);
}
