const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-collapse");

export function navHamburger() {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
	});

	document.querySelectorAll(".navbar-collapse").forEach((n) =>
		n.addEventListener("click", () => {
			hamburger.classList.remove("active");
		})
	);
}
