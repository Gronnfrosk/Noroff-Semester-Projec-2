const navTabs = document.querySelector(".nav-tabs");
const profileAvatar = document.querySelector("#avatar");
const profileContainer = document.querySelector("#profile-detail");

export function profileContent(profileInfo, profileBids, profileWins, credit) {
	profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Profile image" class="pe-0 avatar">`;

	profileContainer.innerHTML += `
        <div class="profile-info mx-auto">
            <div class="name text-center"><h2>${profileInfo.name}</h2></div>
            <div class="email text-center"><p>${profileInfo.email}</p></div>
            ${credit}
        </div>
    `;

	navTabs.innerHTML = `
    <li class="nav-item">
        <a class="nav-link active" id="profile-listings" aria-current="page" data-toggle="tab" href="?name=${profileInfo.name}">Listings (${profileInfo._count.listings})</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="profile-bids" href="?name=${profileInfo.name}&tabs=bids" data-toggle="tab">Bids (${profileBids})</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="profile-wins" href="?name=${profileInfo.name}&tabs=wins" data-toggle="tab">Wins (${profileWins})</a>
    </li>
    `;
}
