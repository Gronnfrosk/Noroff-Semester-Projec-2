const sellerPlace = document.querySelector("#seller");

/**
 * This function displays seller information as avatar and name.
 * @param {object} seller The seller data form a target auction item listing.
 * @param {Element} sellerPlace This is a html element where the seller of auction item is displayed.
 */
export function displaySeller(seller) {
	if (!seller.avatar) {
		seller.avatar =
			"https://cdn-icons-png.flaticon.com/512/459/459122.png?w=826&t=st=1683974940~exp=1683975540~hmac=14f2e1cc636568b3959b2f157c76fb23764401ca86096b0a6f893c102da7c331";
	}

	sellerPlace.innerHTML += `
	<h3>Seller</h3>
	<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${seller.name}">
		<div class="image-special"><img src="${seller.avatar}" alt="Seller avatar" onerror="this.src='https://cdn-icons-png.flaticon.com/512/459/459122.png?w=826&t=st=1683974940~exp=1683975540~hmac=14f2e1cc636568b3959b2f157c76fb23764401ca86096b0a6f893c102da7c331'"></div>
		<p class="link mt-2">${seller.name}</p>
	</a>
	`;
}
