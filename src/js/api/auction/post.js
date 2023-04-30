// Create post
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth_fetch.mjs";

const action = "/posts";
const method = "post";

/**
 * This async function sends an API "POST" request.
 * @param {Object} postData The data that will be sent to the "POST" request.
 * @param {String} updatePostURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method.
 */
export async function createPost(postData) {
	const createPostURL = API_SOCIAL_URL + action;

	const response = await authFetch(createPostURL, {
		method,
		body: JSON.stringify(postData),
	});

	return await response.json();
}
