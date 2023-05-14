import { createAuctionItem } from "../../api/auction/create_item.js";

const formCreate = document.querySelector("#add-item-form");

/**
 * This function triggers by a form submit and creates a auction item listing by sending request to API.
 * @param {Element} formCreate This is a html element where a form is displayed.
 * @param {Class} formData This is a collection of data to form.
 * @param {Object} item This is a collection of data by key and value from submit form.
 * @param {string} item.endsAt endAt is the deadline of auction item.
 * @param {string} item.media media is the urls of auction item.
 * @function isValidUrl() This function checks if string is an url.
 * @function createAuctionItem() This function Sends API request "POST" with formatted auction item data.
 
 */
export function setCreateItemFormListener() {
	formCreate.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;

		if (form.checkValidity()) {
			const formData = new FormData(form);
			const item = Object.fromEntries(formData.entries());

			item.endsAt = new Date(item.endsAt).toISOString();

			function isValidUrl(string) {
				try {
					new URL(string);
					return true;
				} catch (err) {
					return false;
				}
			}

			item.media = [item.media0, item.media1, item.media2, item.media3];

			// Remove not URL
			item.media = item.media.filter(function (url) {
				return isValidUrl(url) === true;
			});

			delete item.media0;
			delete item.media1;
			delete item.media2;
			delete item.media3;

			createAuctionItem(item);
		}
	});
}
