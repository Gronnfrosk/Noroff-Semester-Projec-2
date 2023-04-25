import * as global from "./global-modules/index.js";
import * as user from "./user-management/index.js";
import { checkUser } from "./localstorage/check_storage.js";

global.navHamburger();
global.inputValidation();

//global.navUser();

const path = location.pathname;

if (path === "/Noroff-Semester-Project-2/html/signin.html" || path === "/html/signin.html") {
	user.setLoginFormListener();
	console.log("Hello login site");
} else if (path === "/Noroff-Semester-Project-2/html/register.html" || path === "/html/register.html") {
	user.setRegisterFormListener();
	console.log("Hello register site");
} else if (path === "/Noroff-Semester-Project-2/html/profile.html" || path === "/html/profile.html") {
	checkUser();
	user.logout();
	console.log("Hello profile page");
} else if (path === "/Noroff-Semester-Project-2/html/specific_auction_item.html" || path === "/html/specific_auction_item.html") {
	checkUser();
	user.logout();
	console.log("Hello specific page");
} else if (path === "/Noroff-Semester-Project-2/" || path === "/index.html") {
	user.logout();
	global.checkUserNav();
	console.log("Hello home page");
}

console.log("Hello main index javascript");
