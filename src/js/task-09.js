function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', handleClick => {
  let color = getRandomHexColor()
})