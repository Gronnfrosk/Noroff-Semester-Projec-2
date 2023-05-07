import { load } from "../localstorage/save_load_remove.js";
import { getProfile } from "../api/profile/get_profile.js";

const editAvatar = document.querySelector("#edit-avatar");
const addItem = document.querySelector(".add-item");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const nameOther = params.get("name");
const profile = load("profile");

// check if profile is myself or other user
export async function anotherProfile() {
	let profileInfo;
	let creditContent;

	if (!nameOther || nameOther === profile.name) {
		profileInfo = await getProfile(profile.name);
		creditContent = `<div class="credit mx-auto text-center mt-2"><p class="">Total Credit - ${profileInfo.credits}</p></div>`;
	} else if (profile.name !== nameOther) {
		profileInfo = await getProfile(nameOther);
		creditContent = `<div class="credit mx-auto text-center mt-2"><p class=""></p></div>`;
		editAvatar.classList.add("opacity-0");
		editAvatar.classList.add("disabled");
		addItem.classList.add("disabled");
		addItem.classList.add("text-info");
	} else {
		alert("No name found");
	}
	return { profileInfo, creditContent, params };
}
