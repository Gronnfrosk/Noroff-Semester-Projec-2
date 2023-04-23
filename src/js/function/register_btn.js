const registerBtn = document.querySelector("#show-register");
const register = document.querySelector("#registerForm");
const login = document.querySelector("#loginForm");

console.log(registerBtn);
console.log(register);
console.log(login);

export function registerForm() {
	registerBtn.addEventListener("click", () => {
		register.classList.remove("hidden");
		login.classList.add("hidden");
	});
}
