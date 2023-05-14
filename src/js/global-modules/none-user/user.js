import { load } from "../../localstorage/save_load_remove.js";

const userNav = document.querySelectorAll("#nav-user");
const navNew = document.querySelectorAll("#login");
const addItem = document.querySelector(".add-btn");
const profileLinks = document.querySelector(".details-bid");

const token = load("token");
const userToken = load("profile");

/**
 * This function allow users functions and prevents none users from other profile links.
 * @param {string} token This is the localStorage key with access token value.
 * @param {string} userToken This is the localStorage key with user profile data value.
 * @param {Element} userNav The element links for profile and logout links.
 * @param {Element} navNew The element links for login links.
 * @param {Element} addItem This is the element button for creating auction item listing.
 * @param {Element} profileLinks All the bid and seller links on specific item page.
 */
export function checkUser() {
	if (token && userToken) {
		// Show logout and profile nav
		userNav.forEach((element) => {
			element.classList.remove("d-none");
		});

		// Hide login nav
		navNew.forEach((element) => {
			element.classList.add("d-none");
		});

		// Show create auction item button
		if (addItem) {
			addItem.classList.remove("d-none");
		}
	}

	if (userToken === null || token === null) {
		// Disable profile links on specific
		if (profileLinks) {
			profileLinks.classList.add("link-disabled");

			profileLinks.addEventListener("click", (event) => {
				event.preventDefault();
			});
		}
	}
}
