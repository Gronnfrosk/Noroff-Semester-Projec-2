import { getProfile } from "../../api/profile/get_profile.js";

const containerThree = document.querySelector(".bid-history");
var avatar = "";
var bidLog = "";

/**
 * This async function display bid history from target auction item listing.
 * @param {Object} profile This is the localStorage key with user profile data.
 * @param {Object} bids This is the data of all the bids on target auction item.
 * @param {number} _count This is the amount of bids on target auction item.
 * @param {Element} containerThree This is a html element where the auction item bids details are displayed.
 * @param {Object} bidDetails This is bids filtered with highest bidder first.
 * @param {object} bidder This is data from the first bidder from bid details, also the highest bidder on auction item.
 */
export async function displayBids(profile, bids, _count) {
	containerThree.innerHTML = ``;
	const bidDetails = bids.sort((a, b) => a.amount - b.amount).reverse();

	if (profile !== null) {
		const bidder = await getProfile(bidDetails[0].bidderName);
		if (bidder !== undefined) {
			avatar = `<img src="${bidder.avatar}" alt="Avatar" onerror="this.src='https://cdn-icons-png.flaticon.com/512/459/459122.png?w=826&t=st=1683974940~exp=1683975540~hmac=14f2e1cc636568b3959b2f157c76fb23764401ca86096b0a6f893c102da7c331'"></img>`;
		}
	} else {
		avatar = `<img src='https://cdn-icons-png.flaticon.com/512/459/459122.png?w=826&t=st=1683974940~exp=1683975540~hmac=14f2e1cc636568b3959b2f157c76fb23764401ca86096b0a6f893c102da7c331' alt="Avatar"></img>`;
	}

	// bidding history of all bids
	bidDetails.forEach((bid) => {
		bidLog += `
				<div class="" id="${bid.bidderName}">
					<a href="profile.html?name=${bid.bidderName}">
						<p class="link">${bid.amount} credit - ${bid.bidderName}</p>
					</a>
				</div>`;

		return bidLog;
	});

	// Highest bid and log template
	containerThree.innerHTML = `
            <h2>Highest bid:</h2>
            <div class="highest">
                <a href="profile.html?name=${bidDetails[0].bidderName}" >
                    <div class="bid-winner" id="${bidDetails[0].amount}">
                        <p class="link">${bidDetails[0].amount} credit - ${bidDetails[0].bidderName}</p>
                    </div>
                </a>
                <div class="image-special justify-content-center">
                    ${avatar}
                </div>
            </div>
            <div class="ms-5">
                <h3>Bidding history (Total ${_count})</h3>
                <div class="bid-log">
                    ${bidLog}
                </div>
            </div>
        `;
}
