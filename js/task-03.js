const listEl = document.querySelector('.gallery')

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const creatListItemEls = images.map(({ url, alt }) => `
  <li class = ''>
  <img src = ${url} alt = ${alt} width = 480px>
  </li>`
).join('');

listEl.insertAdjacentHTML('beforeend', creatListItemEls);

listEl.style = `list-style: none; display: flex; flex-wrap: wrap; justifyContent: center; gap: 10px;`
