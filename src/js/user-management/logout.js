const logoutButton = document.querySelector("#logout");
const logoutButtonFooter = document.querySelector("#logoutFooter");

/**
 * This function initiate when logout button is clicked and the user logs out by removing JSON Web Tokens.
 * @param {Element} logoutButton This is a html element where a button is displayed.
 */

export function logout() {
	console.log("Hello from logout");
	logoutButton.addEventListener("click", () => {
		event.preventDefault();
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
	});

	logoutButtonFooter.addEventListener("click", () => {
		event.preventDefault();
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
	});
}
