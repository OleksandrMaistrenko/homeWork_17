import { getWordStatistic, getUniqueWordsCount } from "./sendFetch.mjs";

const enter = document.getElementById("add_btn");
const clearButton = document.getElementById("clear_button");
const input_list = document.getElementById("input_list");
const amountUniqWords = document.getElementById("amount_uniq_words");

async function showQuantityUniqWords() {
  const userInput = document.getElementById("user_input").value.trim();

  if (userInput === "") {
    amountUniqWords.textContent = 0;
    return;
  }

  const responseFromServer = await getWordStatistic(userInput);
  const countUniqueWords = await getUniqueWordsCount(userInput);

  amountUniqWords.textContent = countUniqueWords ? countUniqueWords : 0;

  if (responseFromServer) {
    input_list.innerHTML = "";

    responseFromServer.forEach((value, key, map) => {
      const li = document.createElement("li");
      li.textContent = `${value[0]}: ${value[1]}`;
      input_list.appendChild(li);
    });
  }
}

enter.addEventListener("click", showQuantityUniqWords);

function clearText() {
  const userInput = document.getElementById("user_input");
  amountUniqWords.textContent = 0;
  userInput.value = "";
  input_list.textContent = "";
}

clearButton.addEventListener("click", clearText);
