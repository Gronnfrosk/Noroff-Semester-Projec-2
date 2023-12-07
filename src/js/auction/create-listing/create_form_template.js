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
            <label for="validationCustom00" class="form-label">Title </label>
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
            <label for="validationCustom02" class="form-label p-0 ps-2">Deadline</label>
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
        <label for="validationCustom03" class="col-form-label">Media URL (min 1, max 4):</label>
        <div class="form-floating media-url">
            <input
                type="url"
                class="form-control media-input"
                id="validationCustom03"
                placeholder="Media URL 1"
                required
                name="media0"
            />
            <div class="btn delete-url delete-cover"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg></i></div>
            <div class="invalid-feedback mb-3">Must have at least one image.<br />- Example: http://www.example.com</div>
            <label for="validationCustom03" class="form-label">Paste for preview</label>
            <div class="box cards" id="cover-img"></div>
            <div class="form-floating media-url d-none">
                <input
                    type="url"
                    class="form-control media-input"
                    id="validationCustom04"
                    placeholder="Media URL 2"
                    name="media1"
                />
                <div class="btn delete-url"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg></i></div>
                <label for="validationCustom04" class="form-label">Image nr. 2</label>
            </div>
            <div class="form-floating media-url d-none">
                <input
                    type="url"
                    class="form-control media-input"
                    id="validationCustom05"
                    placeholder="Media URL 3"
                    name="media2"
                />
                <div class="btn delete-url"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg></i></div>
                <label for="validationCustom05" class="form-label">Image nr. 3</label>
            </div>
            <div class="form-floating media-url d-none">
                <input
                    type="url"
                    class="form-control media-input  "
                    id="validationCustom06"
                    placeholder="Media URL 4"
                    name="media3"
                />
                <div class="btn delete-url"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg></div>
                <label for="validationCustom06" class="form-label">Image nr. 4</label>
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
