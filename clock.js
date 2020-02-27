import "./styles.css";

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const dayName = ["일욜", "월욜", "화욜", "수욜", "목욜", "금욜!", "토욜"];
const monthName = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월"
];

function getTime() {
  const date = new Date();
  const months = monthName[date.getMonth()];
  const days = date.getDate() + "일";
  const dates = dayName[new Date().getDay()];
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${months} ${days} ${dates}
  ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();