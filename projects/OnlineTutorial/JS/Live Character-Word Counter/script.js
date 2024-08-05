// 29 - Aug - 2023

const textArea = document.querySelector("textarea");
const charCount = document.querySelector(".charCount");
const wordCount = document.querySelector(".wordCount");
const charDecrement = document.querySelector(".charDecrement");

textArea.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  const charLength = inputValue.length;
  const wordLength = inputValue
    .split(/[\n\r\s]+/g)
    .filter((word) => word.length > 0).length;

  charCount.innerText = `${charLength}`;
  wordCount.innerText = `${wordLength}`;

  charDecrement.innerText = `${200 - charLength}`;
  charDecrement.innerText == 200
    ? (charDecrement.style.color = "black")
    : (charDecrement.style.color = "tomato");
});
