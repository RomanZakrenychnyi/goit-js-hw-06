const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const list = ingredients.reduce(
    (str, item) => str + `<li>${item}</li>`, '');

ulEl.innerHTML = list;