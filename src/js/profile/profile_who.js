import { load } from "../localstorage/save_load_remove.js";
import { getProfile } from "../api/profile/get_profile.js";

const editAvatar = document.querySelector(".edit-container button");
const addItem = document.querySelector(".add-item");
const sorted = document.querySelector(".sort");
const blueContainer = document.querySelector(".blue-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const nameOther = params.get("name");
const profile = load("profile");

// check if profile is myself or other user
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
	} else {
		alert("No name found");
	}
	return { profileInfo, creditContent, params };
}
