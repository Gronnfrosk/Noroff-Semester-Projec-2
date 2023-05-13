const sellerPlace = document.querySelector("#seller");

export function displaySeller(seller) {
	if (!seller.avatar) {
		seller.avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU";
	}

	sellerPlace.innerHTML += `
	<h3>Seller</h3>
	<a href="https://gronnfrosk.github.io/Noroff-Semester-Project-2/html/profile.html?name=${seller.name}">
		<div class="image-special"><img src="${seller.avatar}" alt="Seller avatar" onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&usqp=CAU'"></div>
		<p class="link mt-2">${seller.name}</p>
	</a>
	`;
}
