const daysContainer = document.querySelector(".js-days"),
  daysTitle = daysContainer.querySelector("h3");

const dayName = ["일욜", "월욜", "화욜", "수욜", "목욜", "금욜!", "토욜"];
const monthName = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12"
];

function getDays(){
    const date = new Date();
    const months = monthName[date.getMonth()];
    const days = date.getDate();
    const dates = dayName[new Date().getDay()];
    daysTitle.innerText = `${months}/${days} ${dates}`
}

function init(){
    getDays();
    setInterval(getDays, 1000);
}

init();