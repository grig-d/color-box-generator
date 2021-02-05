// В HTML есть пустой список ul#ingredients
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement()

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsItem = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
};

const ingredientsItems = ingredients.map(ingredient =>
  createIngredientsItem(ingredient),
);

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...ingredientsItems);
