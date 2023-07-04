document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const memoId = urlParams.get("id");
  const memoDate = urlParams.get("date");
  const memoContent = urlParams.get("content");

  document.getElementById("date").innerHTML = memoDate;
  document.getElementById("content").innerHTML = memoContent;
});
