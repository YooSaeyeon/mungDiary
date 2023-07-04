const loginForm = document.getElementById("login-form");
const loginId = loginForm.querySelector("#input-id");
const loginPwd = loginForm.querySelector("#input-psw");
const loginButton = loginForm.querySelector("#btn-join");

function onLoginBtnClick() {
  const val_id = loginId.value;
  const val_pwd = loginPwd.value;

  if (val_id === "" || val_pwd === "") {
    alert("아이디/비번을 모두 입력해주세요~~!");
  } else {
    window.location.href = "main.html";
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
