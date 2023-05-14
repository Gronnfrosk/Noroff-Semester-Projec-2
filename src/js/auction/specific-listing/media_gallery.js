const mediaPlace = document.querySelector(".carousel-inner");
const mediaButton = document.querySelector(".carousel-indicators");
const nextPrevBtn = document.querySelectorAll(".slide-btn");

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

	//Carousel function
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
