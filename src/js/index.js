import { globalFunctions } from "./global-modules/index.js";
import * as user from "./user-management/index.js";
import * as checkToken from "./localstorage/check_storage.js";
import { displayProfile } from "./profile/profile_info.js";
import { editAvatarListener } from "./profile/edit_avatar.js";
import { specificAuctionItem } from "./auction/specific-listing/specific_item_template.js";
import { setCreateItemFormListener } from "./auction/create-listing/create_item.js";
import { createForm } from "./auction/create-listing/create_form_template.js";
import { setCreateBidFormListener } from "./auction/specific-listing/create_bid.js";
import { displayNumberOfCards } from "./auction/all-listings/auction_cards_display.js";

const path = location.pathname;

if (path === "/Noroff-Semester-Project-2/html/signin.html" || path === "/html/signin.html") {
	checkToken.checkUserTokenLogin();
	user.setLoginFormListener();
} else if (path === "/Noroff-Semester-Project-2/html/register.html" || path === "/html/register.html") {
	checkToken.checkUserTokenLogin();
	user.setRegisterFormListener();
} else if (path === "/Noroff-Semester-Project-2/html/profile.html" || path === "/html/profile.html") {
	checkToken.checkUserToken();
	displayProfile();
	editAvatarListener();
	createForm();
	setCreateItemFormListener();
	user.logout();
} else if (path === "/Noroff-Semester-Project-2/html/specific_auction_item.html" || path === "/html/specific_auction_item.html") {
	specificAuctionItem();
	setCreateBidFormListener();
	user.logout();
} else if (path === "/Noroff-Semester-Project-2/" || path === "/index.html") {
	displayNumberOfCards();
	createForm();
	setCreateItemFormListener();
	user.logout();
}

globalFunctions();
