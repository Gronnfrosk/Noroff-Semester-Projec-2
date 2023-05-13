const hamburger = document.querySelector(".hamburger");

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
