const allCards = document.querySelectorAll(".card");

console.log(allCards);

for (const card of allCards) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect();
  console.log(rect);

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // dynamically update css value by these variables
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};
