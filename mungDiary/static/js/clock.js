const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

document.getElementById("year").innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("day").innerText = day;

const dayOfWeek = getKoreanDayOfWeek(date.getDay());
document.getElementById("dayOfWeek").innerText = dayOfWeek;

function getKoreanDayOfWeek(day) {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  return daysOfWeek[day];
}
