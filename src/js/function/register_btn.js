const registerBtn = document.querySelector("#show-register");
const register = document.querySelector("#registerForm");
const login = document.querySelector("#loginForm");

export function registerForm() {
	registerBtn.addEventListener("click", () => {
		register.classList.remove("d-none");
		login.classList.add("d-none");
	});
}
