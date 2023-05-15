import { load } from "../localstorage/save_load_remove.js";
import { getProfile } from "../api/profile/get_profile.js";

const editAvatar = document.querySelector(".edit-container button");
const addItem = document.querySelector(".add-item");
const sorted = document.querySelector(".sort");
const blueContainer = document.querySelector(".blue-container");
const params = new URLSearchParams(document.location.search);
const nameOther = params.get("name");
const profile = load("profile");

/**
 * This async function check if it is user profile or another user profile and returns the profile info and credit content.
 * @param {Object} profileInfo This is the response from API "GET" request with a profile name, the profile data.
 * @param {String} creditContent The Html content for display of credit.
 * @param {String} nameOther The specific string gotten from the name querystring.
 * @param {Object} profile This is the localStorage key with user profile data.
 * @param {Element} editAvatar This is a html element of edit profile button.
 * @param {Element} addItem This is a html element of create auction item button.
 */
export async function anotherProfile() {
	let profileInfo;
	let creditContent;

	if (!nameOther || nameOther === profile.name) {
		editAvatar.style.display = "contents";
		addItem.classList.remove("d-none");
		profileInfo = await getProfile(profile.name);
		creditContent = `<div class="credit mx-auto text-center mt-2"><p class="">Total Credit - ${profileInfo.credits}</p></div>`;
	} else if (profile.name !== nameOther) {
		profileInfo = await getProfile(nameOther);
		creditContent = `<div class="credit none-user-credit mx-auto text-center mt-2"></div>`;

		blueContainer.style.padding = "30px 0 48px 0";
		sorted.style.top = "75px";
	}
	return { profileInfo, creditContent };
}
