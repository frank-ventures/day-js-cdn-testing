console.log("Yo heres my app.js!");

// Docs: https://day.js.org/docs/en/get-set/day

const myDate = document.getElementById("my-date");
const myDiv = document.getElementById("my-day-div");
myDate.innerHTML = `Here's the result of dayjs().day(0) : ${dayjs().day(0)}`;

console.log("a day.js day", dayjs().day(0));

console.log("extending");
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_isoWeek);

console.log("my iso week is ", dayjs().isoWeek());
console.log(" my iso week day is", dayjs().isoWeekday());
console.log("and my year", dayjs().isoWeekYear());

const newP = document.createElement("p");
newP.innerHTML = `We're on week ${dayjs().isoWeek()} and it's day ${dayjs().isoWeekday()} of this week. It is the year ${dayjs().isoWeekYear()}`;
myDiv.appendChild(newP);
