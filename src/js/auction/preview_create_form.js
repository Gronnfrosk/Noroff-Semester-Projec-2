export function addItemMedia() {
	const mediaUrl = document.querySelector("#validationCustom03");
	const mediaUrlNext = document.querySelectorAll("#add-item-form .media-input");
	const input = document.querySelectorAll("#add-item-form .media-url");
	const mediaPreview = document.querySelectorAll("#add-item-form .media-image");
	const cover = document.querySelector("#cover-img");

	mediaUrl.addEventListener("paste", function (e) {
		cover.innerHTML = "";
		const contents = e.clipboardData.getData("text");

		cover.innerHTML += `
	            <div class="listing d-flex flex-column">
	                <div class="listing-image">
	                    <img src="${contents}" alt="Profile image" alt="Auction item" class="fs-6 mx-auto text-center">
	                </div>
				</div>
	            <p class="text-center">Cover image view</p>
	        `;
	});

	for (let i = 0; i < mediaUrlNext.length; i++) {
		mediaUrlNext[i].addEventListener("paste", function (e) {
			const contents = e.clipboardData.getData("text");

			mediaPreview[i].innerHTML = `
            <div class="media-box"><p>${i + 1}.</p></div>
            <img src="${contents}" alt="Image" class="bd-placeholder-img">`;

			if (input[i + 1]) {
				input[i + 1].classList.remove("d-none");
			}
		});
	}
}
