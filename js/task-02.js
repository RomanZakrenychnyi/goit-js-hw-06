const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

const handleCreatItemEl = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;
  listItemEl.classList.add('item');
  return listItemEl
}
);

listEl.append(...handleCreatItemEl)

