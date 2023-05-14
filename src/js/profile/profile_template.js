const navTabs = document.querySelector(".nav-tabs");
const profileAvatar = document.querySelector("#avatar");
const profileContainer = document.querySelector("#profile-detail");

/**
 * This function displays target profiles avatar, profile details (name, email and credit) and tabs (listings, bids and wins).
 * @param {Element} navTabs This is a html element where tabs nav are displayed.
 * @param {Element} profileAvatar This is a html element where avatar image is displayed.
 * @param {Element} profileContainer This is a html element where profile details are displayed.
 * @param {Object} profileInfo This is the response from API "GET" request with a profile name, the profile data.
 * @param {Object} profileBids This is data over profile and all the item/listings that the target profile have placed bids on.
 * @param {Object} profileWins This is the id of every listing/item the target profile have won.
 * @param {String} credit The Html content for display of credit.
 */
export function profileContent(profileInfo, profileBids, profileWins, credit) {
	profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Profile image" class="pe-0 avatar" onerror="this.src='https://cdn-icons-png.flaticon.com/512/459/459122.png?w=826&t=st=1683974940~exp=1683975540~hmac=14f2e1cc636568b3959b2f157c76fb23764401ca86096b0a6f893c102da7c331'">`;

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
