/**
 * This function disable form submissions if there are invalid fields.
 * @param {Element} forms This is the html element where the form is displayed.
 */

export function inputValidation() {
	(() => {
		"use strict";

		const forms = document.querySelectorAll(".needs-validation");

		Array.from(forms).forEach((form) => {
			form.addEventListener(
				"submit",
				(event) => {
					if (!form.checkValidity()) {
						event.preventDefault();
						event.stopPropagation();
					}

					form.classList.add("was-validated");
				},
				false
			);
		});
	})();
}
