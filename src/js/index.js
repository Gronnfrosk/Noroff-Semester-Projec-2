import { globalFunctions } from "./global-modules/index.js";
import * as user from "./user-management/index.js";
import * as checkToken from "./localstorage/check_storage.js";
import { displayProfile } from "./profile/profile_info.js";
import { editAvatarListener } from "./profile/edit_avatar.js";
import { specificAuctionItem } from "./auction/specific-listing/specific_item_template.js";
import { setCreateItemFormListener } from "./auction/create-listing/create_item.js";
import { createForm } from "./auction/create-listing/create_form_template.js";
import { getAuctionItems } from "./api/auction/getItem.js";


const path = location.pathname;

/**
 * This conditional statement controls which function is called at different URL location.
 * @param {string} path This is a string containing the path of the URL for the location
 */
if (path === "/html/signin.html" || path === "/Noroff-Semester-Project-2/html/signin.html") {
	checkToken.checkUserTokenLogin();
	user.setLoginFormListener();
} else if (path === "/html/register.html" || path === "/Noroff-Semester-Project-2/html/register.html") {
	checkToken.checkUserTokenLogin();
	user.setRegisterFormListener();
} else if (path === "/html/profile.html" || path === "/Noroff-Semester-Project-2/html/profile.html") {
	checkToken.checkUserToken();
	displayProfile();
	editAvatarListener();
	createForm();
	setCreateItemFormListener();
	user.logout();
} else if (path === "/html/specific_auction_item.html" || path === "/Noroff-Semester-Project-2/html/specific_auction_item.html") {
	specificAuctionItem();
	user.logout();
} else if (path === "/" || path === "/index.html" || path === "/Noroff-Semester-Project-2/" || path === "/Noroff-Semester-Project-2/index.html") {
	getAuctionItems()
	createForm();
	setCreateItemFormListener();
	user.logout();
}

globalFunctions();
