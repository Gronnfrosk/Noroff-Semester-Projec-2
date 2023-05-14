const hamburger = document.querySelector(".hamburger");

/**
 * This function adds and removes active class when hamburger menu is clicked for displaying transition.
 * @param {Element} hamburger This is a html element containing the hamburger menus three lines.
 */
export function navHamburger() {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
	});

	hamburger.querySelectorAll(".navbar-collapse").forEach((n) =>
		n.addEventListener("click", () => {
			hamburger.classList.remove("active");
		})
	);
}
