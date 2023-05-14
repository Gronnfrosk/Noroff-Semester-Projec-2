/**
 * This function deletes the target input url value by clicking delete element.
 * @param {Element} deleteBtn Html elements.
 * @param {Element} mediaUrl The html element for placing the url inputs.
 */
export function deleteUrl() {
	const deleteBtn = document.querySelectorAll(".delete-url");
	const mediaUrl = document.querySelectorAll(".media-input");

	for (let i = 0; i < mediaUrl.length; i++) {
		deleteBtn[i].addEventListener("click", function (event) {
			event.preventDefault();

			mediaUrl[i].value = "";
		});
	}
}
