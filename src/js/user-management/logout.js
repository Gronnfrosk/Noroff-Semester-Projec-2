/**
 * This function initiate when logout button is clicked and the user logs out by removing JSON Web Tokens.
 * @param {Element} logoutButton This is a html element where a button is displayed.
 */
export function logout() {
	const logoutButton = document.querySelector("#logout");
	const logoutButtonFooter = document.querySelector("#logoutFooter");

	logoutButton.addEventListener("click", () => {
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		if (location.pathname !== "/Noroff-Semester-Project-2/index.html") {
			window.location.href = "/Noroff-Semester-Project-2/index.html";
		}
	});

	logoutButtonFooter.addEventListener("click", () => {
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		if (location.pathname !== "/Noroff-Semester-Project-2/index.html") {
			window.location.href = "/Noroff-Semester-Project-2/index.html";
		}
	});
}
