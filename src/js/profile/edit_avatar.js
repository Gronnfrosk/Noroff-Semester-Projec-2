import { editAvatar } from "../api/profile/edit_avatar.js";
import { deleteUrl } from "../global-modules/delete_url.js";

/**
 * This function triggers by form submit to collect form data and send to API.
 * @param {Element} form This is a html element where a form is displayed.
 * @param {Object} formData This is a collection of data to form.
 * @param {Object} profile This is a collection of data by key and value from submit form.
 * @function register() This function sends the profile data to an API "POST" method and informs whether the registration was successful or not.
 */
export function editAvatarListener() {
	const form = document.querySelector("#avatar-edit");
	const preView = document.querySelector("#pre-view-avatar");

	if (form) {
		const mediaInput = document.querySelector(".avatar-media-input");

		form.addEventListener("paste", function (e) {
			const contents = e.clipboardData.getData("text");
			preView.innerHTML = "";

			preView.innerHTML += `
				<img src="${contents}" alt="Profile image" class="pe-0 avatar" onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU'">
				`;
		});

		deleteUrl();

		form.addEventListener("submit", (event) => {
			event.preventDefault();

			// Send it to the API if form is successful validated
			if (form.checkValidity()) {
				editAvatar(mediaInput.value);
			}
		});
	}
}
