const inputEl = document.querySelector('input');
const btnCreatEl = document.querySelector('[data-action="create"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const boxColectionEl = document.querySelector('#boxes');

boxColectionEl.style.cssText = `display: flex; flex-wrap: wrap; gap: 10px`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getNumberOfBoxes = () => {
   return +(inputEl.value)
}

const creatBoxEl = btnCreatEl.addEventListener('click', () => {
  // boxColectionEl.innerHTML = '';
  const inputValueEl = getNumberOfBoxes();
  let boxSize = 20;

  for (let i = 0; i < inputValueEl; i += 1) {
    const randomColor = getRandomHexColor();
    const box = document.createElement('div');
    boxSize += 10;
    if (inputValueEl === 0) {
      return;
    }
    
    box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background: ${randomColor}; margin-top: 10px`
    boxColectionEl.append(box)
    console.log(box);
  }
})

btnDestroyEl.addEventListener('click', () => {
  boxColectionEl.innerHTML = '';
  inputEl.value = '';
})