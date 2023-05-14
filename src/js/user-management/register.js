import { register } from "../api/auth/register.js";
import { deleteUrl } from "../global-modules/delete_url.js";

/**
 * This function triggers by form submit to collect form data and send to API if form validation is successful.
 * @param {Element} form This is a html element where a form is displayed.
 * @param {Object} formData This is a collection of data to form.
 * @param {Object} profile This is a collection of data by key and value from submit form.
 * @function register() This function sends the profile data to an API "POST" method and informs whether the registration was successful or not.
 */
export function setRegisterFormListener() {
	const form = document.querySelector("#registerForm");

	deleteUrl();

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		const profile = Object.fromEntries(data.entries());

		// Send it to the API if form is successful validated
		if (form.checkValidity()) {
			register(profile);
		}
	});
}
