const calendarContainer = document.querySelector(".js-cal"),
  calendarTitle = document.querySelector("table");

const $prevBtn = document.querySelector('#prevMonth_btn')
const $nextBtn = document.querySelector('#nextMonth_btn')

let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let calendar = document.getElementById("cal_table");

let today_yearMonth = todayYear+ "년 " + todayMonth + '월';
document.getElementById("yearMonth").innerHTML = today_yearMonth;

function buildCalendar() {
  let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  let day = firstDate.getDay();
  let week = Math.ceil(lastDate.getDate() / 7) + 1;
  let leftDays = 7;
  let setDays = 1;
  for (let i = 1; i < week; i++) {
    let row = calendar.insertRow();
    while (day !== 0) {
      row.insertCell().innerHTML = "";
      day = -1;
      leftDays -= 1;
    }
    let nextMonthDate = 1;
    while (leftDays !== 0) {
      if (setDays > lastDate.getDate()) {
        row.insertCell().innerHTML = nextMonthDate;
        leftDays -= 1;
        nextMonthDate += 1;
      } else {
        row.insertCell().innerHTML = setDays;
        setDays += 1;
        leftDays -= 1;
      }
    }
    leftDays = 7;
  }
}
buildCalendar();

function deleteCalendar() {
  while (calendar.rows.length > 2) {
    calendar.deleteRow(2);
  }
}

function prevMonth() {
  todayMonth = todayMonth - 1;
  if (todayMonth === 0) {
    todayMonth = 12;
    todayYear -= 1;
  }
  deleteCalendar();
  today = new Date(todayYear, todayMonth - 1);
  buildCalendar();
}

function nextMonth() {
  todayMonth += 1;
  if (todayMonth === 13) {
    todayMonth = 1;
    todayYear = todayYear + 1;
  }
  deleteCalendar();
  today = new Date(todayYear, todayMonth + 1);
  buildCalendar();
}
