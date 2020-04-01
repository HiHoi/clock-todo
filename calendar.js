//변수 설정(제목, 달력, 시간 등)


var currentTitle = document.getElementById("current-year-month");
var calendarBody = document.getElementById("calendar-body");

var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(), 1);

var monthList = [
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

var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //윤년
var notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//월의 총 일수 저장

var pageFirst = first;
var pageYear;

//윤년파악하기
if (first.getFullYear() % 4 === 0) {
  pageYear = leapYear;
} else {
  pageYear = notLeapYear;
}

//달력 만들기
function showCalendar() {
  let monthCnt = 100;
  let cnt = 1;
  //주 단위(최대 6주)
  for (var i = 0; i < 6; i++) {
    var $tr = document.createElement("tr");
    $tr.setAttribute("id", monthCnt);
    //일주일(7일)
    for (var j = 0; j < 7; j++) {
      if ((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]) {
        var $td = document.createElement("td");
        $tr.appendChild($td);
      } else {
        var $td = document.createElement("td");
        $td.textContent = cnt;
        $td.setAttribute("id", cnt);
        $tr.appendChild($td);
        cnt++;
      }
    }

    monthCnt++;
    calendarBody.appendChild($tr);
  }

  currentTitle.innerHTML =
    first.getFullYear() +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    monthList[first.getMonth()];
}


function removeCalendar() {
  let catchTr = 100;

  for (var i = 100; i < 106; i++) {
    var $tr = document.getElementById(catchTr);

    $tr.remove();

    catchTr++;
  }
}

//버튼 만들기
function createBtn() {
  //버튼 만들 위치
  const nextBtnPlace = document.getElementById("next")
  const prevBtnPlace = document.getElementById("prev")
  //버튼 추가
  const nextBtn = document.createElement("button")
  const prevBtn = document.createElement("button")
  //버튼에 기능 추가
  //다음 달로 넘어가는 버튼
  nextBtn.onclick = function() {
    if (pageFirst.getMonth() === 12) {
      pageFirst = new Date(first.getFullYear() + 1, 1, 1);
  
      first = pageFirst;
  
      if (first.getFullYear() % 4 === 0) {
        pageYear = leapYear;
      } else {
        pageYear = notLeapYear;
      }
    } else {
      pageFirst = new Date(first.getFullYear(), first.getMonth() + 1, 1);
  
      first = pageFirst;
    }
  
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  
    currentTitle.innerHTML =
      first.getFullYear() +
      "&nbsp;&nbsp;&nbsp;&nbsp;" +
      monthList[first.getMonth()];
  
    removeCalendar();
  
    showCalendar();
  }
  //이전달로 넘어가는 기능
  prevBtn.onclick = function() {
    if (pageFirst.getMonth() === 1) {
      pageFirst = new Date(first.getFullYear() - 1, 12, 1);
  
      first = pageFirst;
  
      if (first.getFullYear() % 4 === 0) {
        pageYear = leapYear;
      } else {
        pageYear = notLeapYear;
      }
    } else {
      pageFirst = new Date(first.getFullYear(), first.getMonth() - 1, 1);
  
      first = pageFirst;
    }
  
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  
    currentTitle.innerHTML =
      first.getFullYear() +
      "&nbsp;&nbsp;&nbsp;&nbsp;" +
      monthList[first.getMonth()];
  
    removeCalendar();
  
    showCalendar();
  }
  //버튼에 들어갈 내용
  const nextBtnText = document.createTextNode(">")
  const prevBtnText = document.createTextNode("<")

  nextBtn.appendChild(nextBtnText)
  prevBtn.appendChild(prevBtnText)

  nextBtnPlace.appendChild(nextBtn)
  prevBtnPlace.appendChild(prevBtn)
}

function init() {
  showCalendar();
  createBtn()
}

init()