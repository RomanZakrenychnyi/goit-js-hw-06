// 1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3. Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0

const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const counter = document.querySelector('#value')

decrement.addEventListener('click', () => {
    counterValue -= 1
    counter.textContent = counterValue
})

increment.addEventListener('click', () => {
    counterValue += 1
    counter.textContent = counterValue
})
