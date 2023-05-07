import { load } from "../localstorage/save_load_remove.js";
import { getItem } from "../api/auction/getItem.js";
import { getProfile } from "../api/profile/get_profile.js";
import { displayCredits } from "../global-modules/navbar/credit.js";

const mediaPlace = document.querySelector(".carousel-inner");
const mediaButton = document.querySelector(".carousel-indicators");
const bidInputPlace = document.querySelector("#bidding");
const sellerPlace = document.querySelector("#seller");
const nextPrevBtn = document.querySelectorAll(".slide-btn");
const inputField = document.querySelector("#create-bid");
const bidInput = document.querySelector("#bid-input");
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
	const clockFormat = deadline.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
	const start = Date.now();
	const elapsed = deadline - start;
	const profile = load("profile");

	// Display media
	if (media.length > 0) {
		for (let i = 0; i < media.length; i++) {
			mediaButton.innerHTML += `<button class="mediaIndicator bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${
				i + 1
			}"></button>`;
			mediaPlace.innerHTML += `
				<div class="carousel-item">
					<div class="image">
						<img src="${media[i]}" alt="Auction item" class="bd-placeholder-img bd-placeholder-img-lg d-block">
					</div>
				</div>
			`;
		}
		//Carousel function
		const active = document.querySelector(".mediaIndicator");
		const activeOne = document.querySelector(".carousel-item");

		active.classList.add("active");
		activeOne.classList.add("active");

		if (media.length === 1) {
			nextPrevBtn.forEach((element) => {
				element.classList.add("opacity-0");
			});
		}
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

	// Basic item info
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
	if (!bids[0]) {
		containerThree.innerHTML = "";
		containerThree.innerHTML += `<h2 class="bid-winner" id="0">No bid yet</h2>`;
	} else {
		const bidDetails = bids.sort((a, b) => a.amount - b.amount).reverse();

		if (profile) {
			var avatar = `<i class="fa-solid fa-user fs-1"></i>`;
			const bidder = await getProfile(bidDetails[0].bidderName);

			if (bidder !== undefined) {
				avatar = "";
				avatar = `<img src="${bidder.avatar}" alt="Avatar" ></img>`;
			}
		}

		containerThree.innerHTML += `
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
							<div>
								<div class="ms-5">
								<h3>Bidding history (Total ${_count.bids})</h3>
								<div class="bid-log">
								</div>
							</div>`;

		const bidHistory = document.querySelector(".bid-log");

		bidDetails.forEach((bid) => {
			bidHistory.innerHTML += `
				<div class="" id="${bid.bidderName}">
					<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${bid.bidderName}">
						<p class="link">${bid.amount} credit - ${bid.bidderName}</p>
					</a>
				</div>`;
		});
	}

	if (seller.avatar) {
		sellerPlace.innerHTML += `
		<h3>Seller</h3>
		<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${seller.name}">
			<div class="image-special">
				<img src="${seller.avatar}" alt="Seller avatar" class="mt-2">
			</div>
			<p class="link">${seller.name}</p>
		</a>
		`;
	} else {
		sellerPlace.innerHTML += `
		<h3 class="mt-4 pt-3">Seller</h3>
		<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${seller.name}">
			<i class="fa-solid fa-user fs-1"></i>
			<p class="link">${seller.name}</p>
		</a>
		`;
	}

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
}
