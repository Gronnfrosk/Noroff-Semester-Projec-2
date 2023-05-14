import { displayCredits } from "./navbar/credit.js";
import { navHamburger } from "./navbar/hamburger_menu.js";
import { inputValidation } from "./input_validation.js";
import { checkUser } from "./none-user/user.js";

/**
 * This function collects functions from global-modules folder.
 */
export function globalFunctions() {
	displayCredits();
	navHamburger();
	inputValidation();
	checkUser();
}
