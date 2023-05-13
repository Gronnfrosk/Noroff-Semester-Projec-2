import { load } from "../../localstorage/save_load_remove.js";
import { getProfile } from "../../api/profile/get_profile.js";

const creditBar = document.querySelector(".nav-credit");

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image are displayed.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 */
export async function displayCredits() {
	const creditTotal = document.querySelector("#nav-credit");
	const profile = load("profile");

	if (profile !== null && creditTotal !== null) {
		const profileInfo = await getProfile(profile.name);

		creditTotal.innerHTML += `<p class="text-white d-flex align-items-center m-0 pe-3" id="${profileInfo.credits}">Total Credits - ${profileInfo.credits}</p>`;

		return profileInfo.credits;
	} else {
		creditBar.style.height = "0px";
	}
}
