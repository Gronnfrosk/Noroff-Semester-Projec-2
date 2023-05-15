import { createBid } from "../../api/auction/create_bid.js";

const addBidForm = document.querySelector("#create-bid");

/**
 * This function triggers by a form submit to collect form data and send to API if the form validation is successful.
 * @param {String} id The target auction items id.
 * @param {Element} addBidForm This is a html element where a form is displayed.
 * @param {Object} formData This is a collection of data from form.
 * @param {Object} bid This is the value from submit form.
 * @param {Number} newBid The amount of Credit parsed to an integer.
 * @function createBid() This function sends the profile data to an API "POST" method and informs if bid fails.
 */
export function setCreateBidFormListener(id) {
	addBidForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const bid = Object.fromEntries(formData.entries());
		const newBid = parseInt(bid.amount);

		// Send it to the API if form is successful validated
		if (addBidForm.checkValidity()) {
			createBid(id, newBid);
		}
	});
}
