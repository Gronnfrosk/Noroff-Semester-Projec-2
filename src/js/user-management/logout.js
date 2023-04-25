const logoutButton = document.querySelector("#logout");
const logoutButtonFooter = document.querySelector("#logoutFooter");
const path = location.pathname;

/**
 * This function initiate when logout button is clicked and the user logs out by removing JSON Web Tokens.
 * @param {Element} logoutButton This is a html element where a button is displayed.
 */

export function logout() {
	console.log("Hello from logout");

	function listenerLogout(button) {
		if (button) {
			button.addEventListener("click", () => {
				localStorage.removeItem("token");
				localStorage.removeItem("profile");
				if (path !== "/Noroff-Semester-Project-2/") {
					window.location.href = "https://gronnfrosk.github.io/Noroff-Semester-Project-2";
				}
			});
		}
	}

	listenerLogout(logoutButton);
	listenerLogout(logoutButtonFooter);
}
