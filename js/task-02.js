const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

const handlerListItemEl = ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.classList = 'item';
    listItemEl.textContent = ingredient;
    listEl.append(listItemEl)
  }
);