// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const categoriesRef = document.querySelector('#categories'); // нашел элемент с id="categories"
const categoriesItemRef = categoriesRef.querySelectorAll('li.item'); // нашел все элементы li с class="item"
console.log(`В списке ${categoriesItemRef.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

categoriesItemRef.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').textContent}\nКоличество элементов: ${element.querySelectorAll('li').length}`);
});
