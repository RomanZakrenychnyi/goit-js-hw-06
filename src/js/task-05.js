// 1. Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.
// 2. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', event => {
    output.textContent = event.currentTarget.value

    if (event.currentTarget.value === '') {
        output.textContent = 'Anonymous'
    }
})


// input.addEventListener('input', event => {
//   if (event.currentTarget.value === '') {
//     output.textContent = 'Anonymous';
//   } else {
//     output.textContent = event.currentTarget.value;
//   }
// });