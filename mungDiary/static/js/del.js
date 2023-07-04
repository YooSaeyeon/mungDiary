function delBtn(e) {
  console.log("del");
  document.getElementById("date").innerHTML = "";
  document.getElementById("content").value = "";

  const memoIdToDelete = e.target.parentNode.dataset.id;

  // memos 배열에서 id가 memoIdToDelete인 항목을 찾기
  const indexToDelete = memos.findIndex((memo) => memo.id === memoIdToDelete);

  // indexToDelete가 유효한 값인 경우에만 삭제 수행
  if (indexToDelete !== -1) {
    // memos 배열에서 해당 항목 삭제
    memos.splice(indexToDelete, 1);
    localStorage.setItem("memos", JSON.stringify(memos));
  }

  window.location.href = "main.html";
}
