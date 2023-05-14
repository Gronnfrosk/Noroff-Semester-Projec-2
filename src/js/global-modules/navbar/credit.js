import { load } from "../../localstorage/save_load_remove.js";
import { getProfile } from "../../api/profile/get_profile.js";

const creditBar = document.querySelector(".nav-credit");

/**
 * This async function display the users total current credit in the navbar by sending a GET request to API combined with users name.
 * @param {Element} creditTotal This is a html element where total credit is displayed.
 * @param {Object} profileInfo This the response data from an API "GET" request with users profile name.
 * @param {Object} profile This is data of user obtained from the profile value in localStorage.
 * @param {Element} creditBar This is a html element where total credit is displayed.
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
