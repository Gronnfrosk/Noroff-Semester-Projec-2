import { editAvatar } from "../api/profile/edit_avatar.js";
import { deleteUrl } from "../global-modules/delete_url.js";

/**
 * This function triggers by form submit to collect form data and send to API if form validation is successful.
 * @param {Element} form This is a html element where a form is displayed.
 * @param {Element} preView This is a html element where avatar image is displayed.
 * @param {Object} mediaInput This is where the url input for avatar.
 * @param {Object} contents The input value of target avatar input.
 * @function deleteUrl() This function deletes the target input url value.
 * @function editAvatar() This async function sends an API "PUT" request and informs if not successful.
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
				<img src="${contents}" alt="Profile image" class="pe-0 avatar" onerror="this.src='https://img.freepik.com/premium-vector/camera-prohibited-sign-vector_58388-56.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais'">
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
