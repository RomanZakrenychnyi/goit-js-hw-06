// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод 
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients'); //связали ul с js

const list = ingredients.map(el => { //создали переменную list и присвоили ей ссылку на функцию, с методом перебора через callback функцию map
  const liEl = document.createElement('li'); //создали li и вложили ее в переменную
  liEl.textContent = el; //сделали так что бы каждую итерацию эдлемент массива выводился текстом
  return liEl
})
ulElement.append(...list) //подключили к ul наши li с текстом масива ingredients
console.log(ulElement)












