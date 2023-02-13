const sliderEl = document.querySelector('#font-size-control');
const textSizeEl = document.querySelector('#text');

sliderEl.addEventListener('input', event => {
    const fontSize = event.target.value;
    textSizeEl.style.fontSize = `${fontSize}px`;
})