"use strict"

// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).

const totalCategories = document.querySelectorAll('.item');//['li1 и все его наполенние', 'li2 и все его наполенние', 'li3 и все его наполенние']
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((item) => {
    const title = item.querySelector('h2').textContent
    console.log(`Category: ${title}`)
    const element = item.querySelectorAll('li').length
    console.log(`Elements: ${element}`)
})   

// const listElements = document.querySelectorAll('.item>ul');
// console.log(listElements)

// const firstTitle = document.querySelector('.item>h2').textContent;
// console.log(`Category: ${firstTitle}`);

// const firstElement = listElements[0]
// console.log(`${firstElement}`)


// const secondTitle = totalCategories[1].querySelector('.item>h2').textContent;
// console.log(`Category: ${secondTitle}`);

// const thirdTitle = totalCategories[2].querySelector('.item>h2').textContent;
// console.log(`Category: ${thirdTitle}`);


// const title1 = totalCategories[0]
// console.log(title1)

// const title2 = totalCategories[1]
// console.log(title2)

// const title3 = totalCategories[2]
// console.log(title3)

// const searchTitle = [...totalCategories]
// .map(
// category => `Категория: ${category.children[0].textContent}
// Количество элементов: ${category.children[1].children.length}`)
// .join("\n");
// console.log(searchTitle);
