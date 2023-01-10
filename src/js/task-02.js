const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients');


const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
console.log(list)