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
