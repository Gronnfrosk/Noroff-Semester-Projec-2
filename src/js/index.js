import * as global from "./global-modules/index.js";
import * as user from "./user-management/index.js";
import { checkUser } from "./localstorage/check_storage.js";

global.navHamburger();
global.inputValidation();

//global.navUser();

const path = location.pathname;

if (path === "/Noroff-Semester-Project-2/html/signin.html") {
	user.setLoginFormListener();
	console.log("Hello login site");
} else if (path === "/Noroff-Semester-Project-2/html/register.html") {
	user.setRegisterFormListener();
	console.log("Hello register site");
} else if (
	path === "/Noroff-Semester-Project-2/" ||
	path === "/Noroff-Semester-Project-2/html/profile.html" ||
	path === "/Noroff-Semester-Project-2/html/specific_auction_item.html"
) {
	console.log("Hello home, profile and specific page");
	user.logout();
	checkUser();
}

console.log("Hello main index javascript");
