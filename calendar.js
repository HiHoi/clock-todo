const calendarContainer = document.querySelector(".js-cal"),
  calendarTitle = document.querySelector("table");

const monList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

let today = new Date();

let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;

let today_yearMonth = todayYear + "-" + todayMonth;
document.getElementById("yearMonth").innerHTML = today_yearMonth;

let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
let lastDate = new Date(today.getFullYear(), today.getMonth + 1, 0);
let day = firstDate.getDay();
let calendar = document.getElementById("cal_table");
let week = Math.ceil(lastDate.getDate() / 7) + 1;
