const inputEl = document.querySelector('input');
const btnCreatEl = document.querySelector('[data-action="create"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const boxColectionEl = document.querySelector('#boxes');

boxColectionEl.style.cssText = `display: flex; flex-wrap: wrap; gap: 10px`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const creatNumberOfBoxes = () => {
   return +(inputEl.value)
}

const creatBoxEl = btnCreatEl.addEventListener('click', event => {
  boxColectionEl.innerHTML = '';
  const inputValueEl = creatNumberOfBoxes();
  let boxSize = 20;
  const box = document.createElement('div');

  for (let i = 0; i < inputValueEl; i += 1) {
    const randomColor = getRandomHexColor();
    boxSize += 10;
    if (inputValueEl === 0) {
      return;
    }
    
    box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background: ${randomColor}; margin-top: 10px`
    console.log(box);
  }
})

boxColectionEl.append(box)

btnDestroyEl.addEventListener('click', () => {
  boxColectionEl.innerHTML = '';
  inputEl.value = '';
})