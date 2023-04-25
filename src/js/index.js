import * as global from "./global-modules/index.js";
import * as user from "./user-management/index.js";

global.navHamburger();
global.inputValidation();
//global.navUser();

const path = location.pathname;

if (path === "/Noroff-Semester-Projec-2/html/signin.html") {
	user.setLoginFormListener();
	console.log("Hello login site");
} else if (path === "/Noroff-Semester-Projec-2/html/register.html") {
	user.setRegisterFormListener();
	console.log("Hello register site");
}

console.log("Hello main index");
