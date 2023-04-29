//import { load } from "../storage/token.mjs";
import { getItem } from "../api/HTTP-methods/getItem.js";

const mediaPlace = document.querySelector(".carousel-inner");
const mediaButton = document.querySelector(".carousel-indicators");
const containerOne = document.querySelector(".details-one");
const containerTwo = document.querySelector(".details-two");
const containerThree = document.querySelector(".bid-history");

/**
 * This function uses data from API request GET to display a post in html with and without image.
 * @param {Object} post The data of one post.
 * @param {Element} container This is a html element where all generated posts data are displayed.
 * @param {String} dateFormat The format of when the post was created.
 * @param {String} postMedia This is the HTML content for post with image.
 * @param {String} editFeature This is the HTML content from edit and delete features.
 * @param {Object} user This is the value of the key profile in the localStorage
 */
export async function specificAuctionItem(item) {
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const id = params.get("itemID");
	const { id_, title, description, tags, media, created, updated, endsAt, seller, bids, _count } = await getItem(id);

	const deadline = new Date(endsAt);
	const dateFormat = deadline.toLocaleDateString("en-GB");
	const hr = deadline.getHours();
	const min = deadline.getMinutes();
	const clockFormat = hr + ":" + min;
	const start = Date.now();
	const elapsed = deadline - start;

	if (media[0]) {
		mediaPlace.innerHTML += `
				<div class="carousel-item active">
					<div class="image">
						<img src="${media[0]}" alt="Auction item ${title}" class="bd-placeholder-img bd-placeholder-img-lg d-block ">
					</div>
				</div>
			`;

		for (let i = 0; 1 < i < 4, i++; ) {
			if (media[i]) {
				mediaButton.innerHTML += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`;
				mediaPlace.innerHTML += `
				<div class="carousel-item">
					<div class="image">
						<img src="${media[i]}" alt="Auction item ${title}" class="bd-placeholder-img bd-placeholder-img-lg d-block ">
					</div>
				</div>
			`;
			}
		}
	} else {
		mediaPlace.innerHTML += `
		<div class="carousel-item active h-100 border border">
			<div class="image h-50 justify-content-center align-items-center h-100">
			<p class="d-flex align-items-center border border-5 border-danger p-3 m-3 rounded-circle border-opacity-10 fw-bolder h-50">No image available</p>
			</div>
		</div>
		`;
	}
	containerOne.innerHTML = `
                    <h1>${title}</h1>
                    <p>${description}</p>
                    `;

	containerTwo.innerHTML += `
					<div class="deadline">
						<p><b>Deadline</b></p>
						<p class="text-start">
						<i class="fa-regular fa-clock"></i> ${clockFormat}</p> 
						<p><i class="fa-regular fa-calendar-days"></i> ${dateFormat} </p>
					</div>
					`;

	containerThree.innerHTML += `
                    <h2>Highest bid:</h2>
					<div class="highest">
					</div>
					<div>
                    	<div class="ms-5">
                        <h3>Bidding history</h3>
                        <div class="bid-log">
                        </div>
                    </div>`;

	if (elapsed < 0) {
		const clockIcon = document.querySelector(".fa-clock");
		const calenderIcon = document.querySelector(".fa-calendar-days");

		clockIcon.classList.add("text-danger");
		calenderIcon.classList.add("text-danger");
	}

	if (!bids[0]) {
		containerThree.innerHTML = "";
		containerThree.innerHTML += `<h2>No bid yet</h2>`;
	} else {
		const bidHistory = document.querySelector(".bid-log");
		const bidHighest = document.querySelector(".highest");

		const bidDetails = bids.sort((a, b) => a.amount - b.amount).reverse();

		bidHighest.innerHTML += `<div class="" id="${bidDetails[0].bidderName}"><p>${bidDetails[0].amount} credit - ${bidDetails[0].bidderName}</p></div>`;

		bidDetails.forEach((bid) => {
			bidHistory.innerHTML += `<div class="" id="${bid.bidderName}"><p>${bid.amount} credit - ${bid.bidderName}</p></div>`;
		});
	}
}
