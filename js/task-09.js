const bodyEl = document.querySelector('body');
const outputTextColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  outputTextColorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
})