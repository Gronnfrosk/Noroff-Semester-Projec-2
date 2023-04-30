//import { load } from "../storage/token.mjs";
import { getItem } from "../api/auction/getItem.js";

const mediaPlace = document.querySelector(".carousel-inner");
const mediaButton = document.querySelector(".carousel-indicators");
const nextPrevBtn = document.querySelectorAll(".slide-btn");
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
	const dateFormat = deadline.toLocaleDateString();
	const hr = deadline.getHours();
	const min = deadline.getMinutes();
	const clockFormat = hr + ":" + min;
	const start = Date.now();
	const elapsed = deadline - start;

	// Display media
	if (media.length > 0) {
		for (let i = 0; i < media.length; i++) {
			mediaButton.innerHTML += `<button class="mediaIndicator bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${
				i + 1
			}"></button>`;
			mediaPlace.innerHTML += `
				<div class="carousel-item">
					<div class="image">
						<img src="${media[i]}" alt="Auction item ${title[i]}" class="bd-placeholder-img bd-placeholder-img-lg d-block">
					</div>
				</div>
			`;
		}
		//Carousel function
		const active = document.querySelector(".mediaIndicator");
		const activeOne = document.querySelector(".carousel-item");

		active.classList.add("active");
		activeOne.classList.add("active");
	} else {
		mediaPlace.innerHTML += `
		<div class="carousel-item active h-100 border border">
			<div class="image h-50 justify-content-center align-items-center h-100">
				<p class="d-flex align-items-center border border-5 border-danger p-3 m-3 rounded-circle border-opacity-10 fw-bolder h-50">No image available</p>
			</div>
		</div>
		`;
		nextPrevBtn.forEach((element) => {
			element.classList.add("opacity-0");
		});
	}

	//Basic item info
	containerOne.innerHTML = `
                    <h1>${title}</h1>
                    <p>${description}</p>
                    `;

	// Deadline time and date
	if (clockFormat.length > 4) {
		containerTwo.innerHTML += `
					<div class="deadline">
						<p><b>Deadline</b></p>
						<p class="text-start">
						<i class="fa-regular fa-clock"></i> ${clockFormat}</p> 
						<p><i class="fa-regular fa-calendar-days"></i> ${dateFormat} </p>
					</div>
					`;
	} else {
		containerTwo.innerHTML += `
					<div class="deadline">
						<p><b>Deadline</b></p>
						<p class="text-start">
						<p><i class="fa-regular fa-calendar-days"></i> ${dateFormat} </p>
					</div>
					`;
	}
	// Deadline passed show red icon
	if (elapsed < 0) {
		const clockIcon = document.querySelectorAll(".fa-clock");
		const calenderIcon = document.querySelectorAll(".fa-calendar-days");

		clockIcon.forEach((element) => {
			element.classList.add("text-danger");
		});
		calenderIcon.forEach((element) => {
			element.classList.add("text-danger");
		});
	}

	//Bid info
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
