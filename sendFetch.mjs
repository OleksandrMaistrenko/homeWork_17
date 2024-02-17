const wordStatisticUrl = "http://localhost:3500/wordStatistic";
const amountUniqueWordsUrl = "http://localhost:3500/amountUniqueWords";

async function getWordStatistic(userInput) {
  return makeRequest(userInput, wordStatisticUrl);
}

async function getUniqueWordsCount(userInput) {
  return makeRequest(userInput, amountUniqueWordsUrl);
}

async function makeRequest(userInput, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userInput }),
    });

    if (!response.ok) {
      throw new Error(`Could not fetch `);
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.error();
  }
}

export { getWordStatistic, getUniqueWordsCount };
