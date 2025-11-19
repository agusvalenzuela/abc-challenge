function getRandomColor() {
  const colors = ["green", "blue", "red"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const h5Elements = document.querySelectorAll("h5");

h5Elements.forEach(h5 => {
  h5.addEventListener("click", () => {
    h5.style.color = getRandomColor();
  });
});
