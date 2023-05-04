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

	formCreate.innerHTML += `<div class="form-floating">
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
            <div class="invalid-feedback mb-3">Need time and date for auction deadline</div>
            <label for="validationCustom02 form-label">Deadline</label>
        </div>
        <label class="col-form-label">Media URL:</label>
        <div class="form-floating media-url">
            
            <input
                type="url"
                class="form-control media-input"
                id="validationCustom03"
                placeholder="Media URL 1"
                required
                name="media0"
            />
            <div class="invalid-feedback mb-3">Must have at least one image. Only valid URL<br />- Example: http://www.example.com</div>
            <label for="validationCustom03 form-label">Paste for preview</label>
            <input
                    type="url"
                    class="form-control media-input one d-none"
                    id="validationCustom04"
                    placeholder="Media URL 2"
                    name="media1"
                />
                <input
                    type="url"
                    class="form-control media-input two d-none"
                    id="validationCustom05"
                    placeholder="Media URL 2"
                    name="media2"
                />
                <input
                    type="url"
                    class="form-control media-input three d-none"
                    id="validationCustom06"
                    placeholder="Media URL 2"
                    name="media3"
                />
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

	mediaUrl.addEventListener("paste", function (e) {
		const contents = e.clipboardData.getData("text");

		inputOne.classList.remove("d-none");

		mediaPreview.innerHTML = `
		<div class="media-box"><p>1.</p></div>
        <img src="${contents}" alt="Image" class="bd-placeholder-img">`;
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
}
