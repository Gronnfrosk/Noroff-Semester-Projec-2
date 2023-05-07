import { deleteUrl } from "../global-modules/delete_url.js";

const formCreate = document.querySelector("#add-item-form");

//min="2023-05-01T08:30"

export function createForm() {
	const today = new Date();
	let currentHours = today.getHours();
	let currentMinutes = today.getMinutes();
	let currentMonths = today.getMonth() + 1;
	let currentDays = today.getDate();

	if (currentMonths < 10) currentMonths = "0" + currentMonths;
	if (currentDays < 10) currentDays = "0" + currentDays;
	if (currentHours < 10) currentHours = "0" + currentHours;
	if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;

	let todayTime = today.getFullYear() + "-" + currentMonths + "-" + currentDays + "T" + currentHours + ":" + currentMinutes;

	formCreate.innerHTML += `
        <div class="form-floating">
            <input
                type="text"
                class="form-control title-input"
                id="validationCustom00"
                placeholder="Title of auction item"
                required
                minlength="5"
                maxlength="280"
                name="title"
            />
            <div class="invalid-feedback mb-3">Auction item must have a title</div>
            <label for="validationCustom00 form-label">Title </label>
        </div>
        <div class="form-floating">
            <textarea
                class="form-control description-input"
                id="validationCustom01"
                placeholder="Description of auction item"
                required
                name="description"
            ></textarea>
            <div class="invalid-feedback mb-3">Auction item must have a description</div>
            <label for="validationCustom01 form-label">Description </label>
        </div>
        <div class="form-floating deadline-input">
             <label for="validationCustom02 form-label" class="p-0 ps-2">Deadline</label>
            <input
                type="datetime-local"
                class="form-control date-input"
                id="validationCustom02"
                placeholder="Deadline of auction item"
                required
                min="${todayTime}"
                pattern = "MM-DD-YYYY HH:mm"
                name="endsAt"
            />
            <div class="invalid-feedback mb-3 text-center">Requires a time and date for auction deadline</div>
        </div>
        <label class="col-form-label">Media URL (min 1, max 4):</label>
        <div class="form-floating media-url">
            <input
                type="url"
                class="form-control media-input"
                id="validationCustom03"
                placeholder="Media URL 1"
                required
                pattern="https://.*"
                name="media0"
            />
            <div class="btn delete-url delete-cover"><i class="fa-solid fa-delete-left"></i></div>
            <div class="invalid-feedback mb-3">Must have at least one image.<br />- Example: http://www.example.com</div>
            <label for="validationCustom03 form-label" class="form-label">Paste for preview</label>
            <div class="box cards" id="cover-img">	 
		</div>
        <div class="form-floating media-url one d-none">
            <input
                type="url"
                class="form-control media-input"
                id="validationCustom04"
                placeholder="Media URL 2"
                pattern="https://.*"
                name="media1"
            />
            <div class="btn delete-url"><i class="fa-solid fa-delete-left"></i></div>
            <label for="validationCustom04 form-label" class="form-label">Image nr. 2</label>
        </div>
        <div class="form-floating media-url two d-none">
            <input
                type="url"
                class="form-control media-input"
                id="validationCustom05"
                placeholder="Media URL 3"
                pattern="https://.*"
                name="media2"
            />
            <div class="btn delete-url"><i class="fa-solid fa-delete-left"></i></div>
            <label for="validationCustom05 form-label" class="form-label media3-4">Image nr. 3</label>
        </div>
        <div class="form-floating media-url three d-none">
            <input
                type="url"
                class="form-control media-input  "
                id="validationCustom06"
                placeholder="Media URL 4"
                pattern="https://.*"
                name="media3"
            />
            <div class="btn delete-url"><i class="fa-solid fa-delete-left"></i></div>
            <label for="validationCustom06 form-label" class="form-label media3-4">Image nr. 4</label>
        </div>
        <div class="url-upload">
        <div class="media-item">
            <div class="media-one"></div>
            <div class="media-two"></div>
            <div class="media-three"></div>
            <div class="media-four"></div>
        </div>
        <div class="number">
        </div>
    </div>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-outline-info" data-bs-dismiss="modal">Close</button>
<button type="submit" class="btn btn-info" data-bs-target="#exampleModal">Start item auction</button>	
</div>
`;

	const mediaUrl = document.querySelector("#validationCustom03");
	const mediaUrlTwo = document.querySelector("#validationCustom04");
	const mediaUrlThree = document.querySelector("#validationCustom05");
	const mediaUrlFour = document.querySelector("#validationCustom06");
	const inputOne = document.querySelector(".one");
	const inputTwo = document.querySelector(".two");
	const inputThree = document.querySelector(".three");
	const mediaPreview = document.querySelector(".media-one");
	const mediaPreviewTwo = document.querySelector(".media-two");
	const mediaPreviewThree = document.querySelector(".media-three");
	const mediaPreviewFour = document.querySelector(".media-four");
	const cover = document.querySelector("#cover-img");

	mediaUrl.addEventListener("paste", function (e) {
		cover.innerHTML = "";
		const contents = e.clipboardData.getData("text");

		inputOne.classList.remove("d-none");

		cover.innerHTML += `
                <div class="listing d-flex flex-column">
                    <div class="listing-image">
                        <img src="${contents}" alt="Profile image" alt="Auction item" class="fs-6 mx-auto text-center">
                    </div>
				</div>
                <p class="text-center">Cover image view</p>
            `;
	});

	mediaUrlTwo.addEventListener("paste", function (e) {
		const contents = e.clipboardData.getData("text");

		inputTwo.classList.remove("d-none");

		mediaPreviewTwo.innerHTML = `
		<div class="media-box"><p>2.</p></div>
        <img src="${contents}" alt="Image" class="bd-placeholder-img">`;
	});

	mediaUrlThree.addEventListener("paste", function (e) {
		const contents = e.clipboardData.getData("text");

		inputThree.classList.remove("d-none");

		mediaPreviewThree.innerHTML = `
		<div class="media-box"><p>3.</p></div>
        <img src="${contents}" alt="Image" class="bd-placeholder-img">`;
	});

	mediaUrlFour.addEventListener("paste", function (e) {
		const contents = e.clipboardData.getData("text");

		mediaPreviewFour.innerHTML = `
		<div class="media-box"><p>4.</p></div>
        <img src="${contents}" alt="Image" class="bd-placeholder-img">`;
	});

	// Delete url input
	deleteUrl();
}
