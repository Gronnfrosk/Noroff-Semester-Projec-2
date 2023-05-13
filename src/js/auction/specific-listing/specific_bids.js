import { getProfile } from "../../api/profile/get_profile.js";

const containerThree = document.querySelector(".bid-history");
var avatar = "";
var bidLog = "";

export async function displayBids(profile, bids, _count) {
	containerThree.innerHTML = ``;
	const bidDetails = bids.sort((a, b) => a.amount - b.amount).reverse();

	if (profile !== null) {
		const bidder = await getProfile(bidDetails[0].bidderName);
		if (bidder !== undefined) {
			avatar = `<img src="${bidder.avatar}" alt="Avatar" onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU'"></img>`;
		}
	} else {
		avatar = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU' alt="Avatar"></img>`;
	}

	// bidding history of all bids
	bidDetails.forEach((bid) => {
		bidLog += `
				<div class="" id="${bid.bidderName}">
					<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${bid.bidderName}">
						<p class="link">${bid.amount} credit - ${bid.bidderName}</p>
					</a>
				</div>`;

		return bidLog;
	});

	// Highest bid and log template
	containerThree.innerHTML = `
            <h2>Highest bid:</h2>
            <div class="highest">
                <a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${bidDetails[0].bidderName}" >
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
