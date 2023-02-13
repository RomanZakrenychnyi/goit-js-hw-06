const listEl = document.querySelector('.gallery')

const creatListItemEls = images.map(({ url, alt }) => `
  <li class = ''>
  <img src = ${url} alt = ${alt} width = 480px>
  </li>`
)

listEl.insertAdjacentHTML('afterbegin', creatListItemEls)

listEl.style = `list-style: none; display: flex; flex-wrap: wrap; justifyContent: center; gap: 10px;`
