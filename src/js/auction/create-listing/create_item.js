import { createAuctionItem } from "../../api/auction/create_item.js";

const formCreate = document.querySelector("#add-item-form");

/**
 * This function triggers by a form submit and creates a post by sending request to API.
 * @param {Element} formCreate This is a html element where a form is displayed.
 * @param {Class} formData This is a collection of data to form.
 * @param {Object} post This is a collection of data by key and value from submit form.
 * @param {Array} tagsArray This is an array of tags to target post.
 * @function cratePost() This function Sends API request "POST" with post data.
 * @setTimeout Reloads page after 1 second after submit.
 */
export function setCreateItemFormListener() {
	formCreate.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const item = Object.fromEntries(formData.entries());

		item.endsAt = new Date(item.endsAt).toISOString();

		// Check if url is ok
		function isValidUrl(string) {
			try {
				new URL(string);
				return true;
			} catch (err) {
				return false;
			}
		}

		// Remove not URL
		item.media = [item.media0, item.media1, item.media2, item.media3];
		item.media = item.media.filter(function (url) {
			return isValidUrl(url) === true;
		});

		delete item.media0;
		delete item.media1;
		delete item.media2;
		delete item.media3;

		// Send it to the API if form is successful validated
		if (form.checkValidity()) {
			createAuctionItem(item);
		}

		setTimeout(() => {
			window.location.reload();
		}, 1000);
	});
}
