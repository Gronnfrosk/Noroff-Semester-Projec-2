const sellerPlace = document.querySelector("#seller");
var avatar = "";

export function displaySeller(seller) {
	if (seller.avatar) {
		avatar = `<div class="image-special"><img src="${seller.avatar}" alt="Seller avatar" class="mt-2"></div>`;
	} else {
		avatar = `<i class="fa-solid fa-user fs-1 mt-3"></i>`;
	}

	sellerPlace.innerHTML += `
	<h3>Seller</h3>
	<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${seller.name}">
		${avatar}
		<p class="link mt-2">${seller.name}</p>
	</a>
	`;
}
