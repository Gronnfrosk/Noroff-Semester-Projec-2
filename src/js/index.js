import { globalFunctions } from "./global-modules/index.js";
import * as user from "./user-management/index.js";
import * as checkToken from "./localstorage/check_storage.js";
import { displayProfile } from "./profile/profile_info.js";
import { editAvatarListener } from "./profile/edit_avatar.js";
import { getAuctionItems } from "./api/auction/getItem.js";
import { specificAuctionItem } from "./auction/specific_item_template.js";

const path = location.pathname;

globalFunctions();

if (path === "/Noroff-Semester-Project-2/html/signin.html" || path === "/html/signin.html") {
	user.setLoginFormListener();
	checkToken.checkUserTokenLogin();
	console.log("Hello login site");
} else if (path === "/Noroff-Semester-Project-2/html/register.html" || path === "/html/register.html") {
	user.setRegisterFormListener();
	checkToken.checkUserTokenLogin();
	console.log("Hello register site");
} else if (path === "/Noroff-Semester-Project-2/html/profile.html" || path === "/html/profile.html") {
	checkToken.checkUserToken();
	user.logout();
	displayProfile();
	editAvatarListener();
	console.log("Hello profile page");
} else if (path === "/Noroff-Semester-Project-2/html/specific_auction_item.html" || path === "/html/specific_auction_item.html") {
	checkToken.checkUserToken();
	specificAuctionItem();
	user.logout();
	console.log("Hello specific page");
} else if (path === "/Noroff-Semester-Project-2/" || path === "/index.html") {
	user.logout();
	getAuctionItems();

	console.log("Hello home page");
}

console.log("Hello main index javascript");
console.log("profile js launch on pages");
