import { deleteUrl } from "../../global-modules/delete_url.js";
import { addItemMedia } from "./preview_create_form.js";
import { minDateTime } from "./min_date&time.js";

const formCreate = document.querySelector("#add-item-form");

/**
 * This function displays the create auction item form inputs and media preview display.
 * @param {string} todayTime The formatted current time and date.
 * @param {Element} mediaUrlNext The html element for placing the inputs.
 * @function addItemMedia() This function adds displays of media in the create auction item form when pasting urls in media inputs.
 * @function deleteUrl() This function deletes the target input url value.
 */
export function createForm() {
	const todayTime = minDateTime();

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
                name="media0"
            />
            <div class="btn delete-url delete-cover"><i class="fa-solid fa-delete-left"></i></div>
            <div class="invalid-feedback mb-3">Must have at least one image.<br />- Example: http://www.example.com</div>
            <label for="validationCustom03 form-label" class="form-label">Paste for preview</label>
            <div class="box cards" id="cover-img"></div>
            <div class="form-floating media-url d-none">
                <input
                    type="url"
                    class="form-control media-input"
                    id="validationCustom04"
                    placeholder="Media URL 2"
                    name="media1"
                />
                <div class="btn delete-url"><i class="fa-solid fa-delete-left"></i></div>
                <label for="validationCustom04 form-label" class="form-label">Image nr. 2</label>
            </div>
            <div class="form-floating media-url d-none">
                <input
                    type="url"
                    class="form-control media-input"
                    id="validationCustom05"
                    placeholder="Media URL 3"
                    name="media2"
                />
                <div class="btn delete-url"><i class="fa-solid fa-delete-left"></i></div>
                <label for="validationCustom05 form-label" class="form-label">Image nr. 3</label>
            </div>
            <div class="form-floating media-url d-none">
                <input
                    type="url"
                    class="form-control media-input  "
                    id="validationCustom06"
                    placeholder="Media URL 4"
                    name="media3"
                />
                <div class="btn delete-url"><i class="fa-solid fa-delete-left"></i></div>
                <label for="validationCustom06 form-label" class="form-label">Image nr. 4</label>
            </div>
            <div class="url-upload">
                <div class="media-item">
                    <div class="media-image"></div>
                    <div class="media-image"></div>
                    <div class="media-image"></div>
                    <div class="media-image"></div>
                </div>
                <div class="number">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-info" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-info" data-bs-target="#add-item-form">Start item auction</button>	
        </div>
        `;

	addItemMedia();
	deleteUrl();
}
