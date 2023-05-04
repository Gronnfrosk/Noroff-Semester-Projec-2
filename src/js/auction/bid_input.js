const bidInputPlace = document.querySelector("#bidding");

export function bidInput() {
	setTimeout(() => {
		const lastBid = document.querySelector(".bid-winner").id;
		const maxCredit = document.querySelector(".nav-credit p").id;

		let min = parseInt(lastBid) + 1;
		let max = maxCredit;

		bidInputPlace.innerHTML = `
                <div class="col-auto mb-1">
                <span id="recent-bid" class="form-text">
                Lowest acceptable bid:
                </span>
                </div>
                <input id="validationCustom00" value="${min}" type="number" class="form-control" required name="amount" min="${min}" max="${max}"/>
                <div class="invalid-feedback mb-3">The bid must be above highest</div>
                <label for="validationCustom00 form-label">Credit</label>
            `;
	}, 700);
}
