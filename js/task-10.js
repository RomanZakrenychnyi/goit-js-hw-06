function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreatEl = document.querySelector('[data-action="create"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const boxColectionEl = document.querySelector('#boxes');

const creatNumberOfBoxes = () => {
  const amount = +(inputEl.value)
console.log(amount);
}

const creatBoxEl = btnCreatEl.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  const box = document.createElement('div');

  box.style.cssText = `width: 30px; height: 30px; background: ${randomColor}; margin-top: 10px`
  boxColectionEl.style.cssText = `display: flex; flex-wrap: wrap; gap: 10px`
  boxColectionEl.append(box)
})


btnDestroyEl.addEventListener('click', () => {
  boxColectionEl.innerHTML = '';
})