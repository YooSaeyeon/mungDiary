const saveBtn = document.getElementById("save");
const all = document.getElementById("white");
//수정 함

let memos = JSON.parse(localStorage.getItem("memos"));
memos = memos ?? [];

saveBtn.addEventListener("click", saveContent);

function saveContent() {
  console.log("save");

  let newMemo = {};

  let memoDate = year + "년" + month + "월" + day + "일" + dayOfWeek + "요일";

  let memoContent = all.querySelector("#content").value;

  let id = JSON.parse(localStorage.getItem("id"));
  id = id ?? 0;

  newMemo.id = id;
  newMemo.date = memoDate;
  newMemo.content = memoContent;

  memos.push(newMemo);

  localStorage.setItem("memos", JSON.stringify(memos));
  localStorage.setItem("id", JSON.stringify(++id));
  //
  localStorage.setItem("dateVal", JSON.stringify(date));
  localStorage.setItem("contVal", JSON.stringify(content));

  window.location.href = `/mungTeam/minwoo/pages/main.html?memo=${encodeURIComponent(
    JSON.stringify(newMemo)
  )}`;
}
