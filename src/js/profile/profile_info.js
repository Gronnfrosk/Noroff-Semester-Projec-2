import { load } from "../localstorage/save_load_remove.js";

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image are displayed.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 */
export function displayProfile() {
	const profileAvatar = document.querySelector("#avatar");
	const profileContainer = document.querySelector("#profile-detail");
	const profile = load("profile");

	profileAvatar.innerHTML += `<img src="${profile.avatar}" alt="Image for the user: ${profile.name}" class="pe-0 avatar">`;

	profileContainer.innerHTML += `<div class="profile-info mx-auto">
    <div class="name text-center"><h2>${profile.name}</h2></div>
    <div class="email text-center"><p>${profile.email}</p></div>
    <div class="credit mx-auto text-center mt-2"><p class="">Total Credit - ${profile.credits}</p></div>
</div>`;
}
