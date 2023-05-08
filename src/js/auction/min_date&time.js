export function minDateTime() {
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

	console.log(todayTime);
	return todayTime;
}
