import { createBid } from "../api/auction/create_bid.js";

const addBidForm = document.querySelector("#create-bid");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("itemID");

export function setCreateBidFormListener() {
	addBidForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const bid = Object.fromEntries(formData.entries());
		const newBid = parseInt(bid.amount);

		// send it to the API
		createBid(id, newBid);
	});
}
