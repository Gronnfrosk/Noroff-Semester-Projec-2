const mediaPlace = document.querySelector(".carousel-inner");
const mediaButton = document.querySelector(".carousel-indicators");
const nextPrevBtn = document.querySelectorAll(".slide-btn");

/**
 * This function display media gallery in a carousel from the auction item media data.
 * @param {Object} media The url strings of the target auction items.
 * @param {Element} mediaPlace This is a html element for display of image.
 * @param {Element} mediaButton This is a html element for carousel bottom nav button.
 * @param {Element} active This is the first html element for carousel bottom nav button.
 * @param {Element} activeOne This is the first html element div containing image in the carousel.
 * @param {Element} nextPrevBtn This is a html element carousel buttons for next and previous.
 */
export function displayMediaGallery(media) {
	mediaPlace.innerHTML = "";

	for (let i = 0; i < media.length; i++) {
		mediaButton.innerHTML += `<button class="mediaIndicator bg-dark" type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="${i}" aria-label="Slide ${
			i + 1
		}"></button>`;

		mediaPlace.innerHTML += `
            <div class="carousel-item">
                <div class="image">
                    <img src="${media[i]}" alt="Auction item" class="bd-placeholder-img bd-placeholder-img-lg d-block" onerror="this.src='https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais'">
                </div>
            </div>
        `;
	}

	const active = document.querySelector(".mediaIndicator");
	const activeOne = document.querySelector(".carousel-item");

	active.classList.add("active");
	activeOne.classList.add("active");

	if (media.length > 1) {
		nextPrevBtn.forEach((element) => {
			element.classList.remove("opacity-0");
		});
	}
}
