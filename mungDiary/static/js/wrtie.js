const circleBtn = document.getElementById("write-form");

function onClickBtn() {
  window.location.href = "/mungTeam/minwoo/pages/write.html?${circle}";
}

circleBtn.addEventListener("click", onClickBtn);
