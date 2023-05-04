navTabs.innerHTML = `
    <li class="nav-item">
        <a class="nav-link" id="profile-listings" aria-current="page" data-toggle="tab" href="?name=${profileInfo.name}">Listings (${profileInfo._count.listings})</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="profile-bids" href="?name=${profileInfo.name}&tabs=bids" data-toggle="tab">Bids (${profileBids.length})</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="profile-wins" href="?name=${profileInfo.name}&tabs=wins" data-toggle="tab">Wins (${profileWins.length})</a>
    </li>
        `;

profileAvatar.innerHTML += `<img src="${profileInfo.avatar}" alt="Image for the user: ${profileInfo.name}" class="pe-0 avatar">`;

profileContainer.innerHTML += `
    <div class="profile-info mx-auto">
        <div class="name text-center"><h2>${profileInfo.name}</h2></div>
        <div class="email text-center"><p>${profileInfo.email}</p></div>
        ${credit}
    </div>`;
