import { editAvatar } from "../api/auth/edit_avatar.js";

/**
 * This function triggers by form submit to collect form data and send to API.
 * @param {Element} form This is a html element where a form is displayed.
 * @param {Object} formData This is a collection of data to form.
 * @param {Object} profile This is a collection of data by key and value from submit form.
 * @function register() This function sends the profile data to an API "POST" method and informs whether the registration was successful or not.
 */
export function editAvatarListener() {
	const form = document.querySelector("#avatar-edit");
	console.log("Hello avatar edit");

	if (form) {
		form.addEventListener("submit", (event) => {
			const mediaInput = document.querySelector(".media-input");
			event.preventDefault();
			//const form = event.target;
			//const data = new FormData(form);
			//const avatar = Object.fromEntries(data.entries());

			// send it to the API
			editAvatar(mediaInput.value);
			console.log(mediaInput.value);
		});
	}
}
