import { remove } from "../localstorage/save_load_remove.js";
const logoutButtons = document.querySelectorAll("#logout");

/**
 * This function initiate when logout button is clicked and the user logs out by removing JSON Web Tokens.
 * @param {Element} logoutButton This is a html element where a button is displayed.
 */

export function logout() {
	console.log("Hello from logout");

	logoutButtons.forEach((button) => {
		if (button !== undefined)
			button.addEventListener("click", () => {
				event.preventDefault();
				remove("token");
				remove("profile");
				window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
			});
	});
}
