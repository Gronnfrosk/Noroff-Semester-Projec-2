const containerTwo = document.querySelector(".details-two");

/**
 * This function displays date and time of target auction item deadline and icons change color to red when deadline is passed.
 * @param {string} endsAt The auction item deadline time and date.
 * @param {string} deadline The specific string gotten from the itemID querystring.
 * @param {String} dateFormat A format of deadline date.
 * @param {string} clockFormat A format of deadline time.
 * @param {String} start The current date and time.
 * @param {String} elapsed The deadline subtracted from the current date and time.
 * @param {string} time The html content to show deadline time.
 * @param {String} closed This is the HTML class content icon.
 * @param {Element} containerTwo This is a html element where the auction item deadline details are displayed.
 */
export function displayDeadline(endsAt) {
	const deadline = new Date(endsAt);
	const dateFormat = deadline.toLocaleDateString("en-GB");
	const clockFormat = deadline.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
	const start = Date.now();
	const elapsed = deadline - start;
	var time = "";
	var closed = "";

	// Deadline passed show red icon
	if (elapsed < 0) {
		closed = "text-danger";
	}

	// if deadline contains time
	if (clockFormat.length > 4) {
		time = `<i class="fa-regular fa-clock ${closed}"></i> ${clockFormat}</p>`;
	}

	// Deadline time and date
	containerTwo.innerHTML += `
				<div class="deadline">
					<p><b>Deadline</b></p>
					<p class="text-start">
					${time}
					<p><i class="fa-regular fa-calendar-days ${closed}"></i> ${dateFormat} </p>
				</div>
				`;
}
