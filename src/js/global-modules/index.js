export * from "./navbar/nav_user.js";
import { displayCredits } from "./navbar/credit.js";
import { navHamburger } from "./navbar/hamburger_menu.js";
import { inputValidation } from "./input_validation.js";

export function globalFunctions() {
	displayCredits();
	navHamburger();
	inputValidation();
}
