const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')


inputEl.addEventListener('input', (event) => {
    if(event.target.value === '') {
        return outputEl.textContent = 'Anonymous';
    } 
        return outputEl.textContent = event.target.value
})