import * as global from "./global-modules/index.js";
import * as user from "./user-management/index.js";

global.navHamburger();
global.inputValidation();
//global.navUser();

const path = location.pathname;

if (path === "/html/signin.html") {
	user.setLoginFormListener();
} else if (path === "/html/register.html") {
	user.setRegisterFormListener();
}

console.log("Hello main index");
