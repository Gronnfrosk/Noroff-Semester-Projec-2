const logoutButton = document.querySelector("#logout");
const logoutButtonFooter = document.querySelector("#logoutFooter");
const path = location.pathname;

/**
 * This function initiate when logout button is clicked and the user logs out by removing JSON Web Tokens.
 * @param {Element} logoutButton This is a html element where a button is displayed.
 */

export function logout() {
	console.log("Hello from logout");

	logoutButton.addEventListener("click", () => {
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		if (location.pathname !== "/Noroff-Semester-Project-2/") {
			window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
		}
	});

	logoutButtonFooter.addEventListener("click", () => {
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		if (location.pathname !== "/Noroff-Semester-Project-2/") {
			window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
		}
	});
}
