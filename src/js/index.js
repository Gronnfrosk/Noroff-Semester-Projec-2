import * as global from "./global-modules/index.js";
import * as user from "./user-management/index.js";

global.navHamburger();
global.inputValidation();
//global.navUser();

const path = location.pathname;

if (path === "https://gronnfrosk.github.io/Noroff-Semester-Projec-2/html/signin.html") {
	user.setLoginFormListener();
} else if (path === "https://gronnfrosk.github.io/Noroff-Semester-Projec-2/html/register.html") {
	user.setRegisterFormListener();
}

console.log("Hello main index");
