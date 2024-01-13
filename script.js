const windowWithInput = document.getElementById("window_one");
const windowWithResult = document.getElementById("window_two");
const buttonOk = document.getElementById("btn_ok");
const addName = document.getElementById("add_name");

initPage();

function showResult() {
  const value = document.getElementById("input").value;
  localStorage.setItem("name", value);
  if (value !== "") {
    addName.textContent = value;
    windowWithInput.classList.remove("window_one");
    windowWithInput.classList.add("hidden");

    windowWithResult.classList.remove("hidden");
  }
}

buttonOk.addEventListener("click", showResult);

function initPage() {
  const enteredUserName = localStorage.getItem("name");

  if (enteredUserName) {
    addName.textContent = enteredUserName;
    windowWithResult.classList.remove("hidden");
  } else {
    windowWithInput.classList.remove("hidden");
    windowWithInput.classList.add("window_one");
  }
}
