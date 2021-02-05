// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
console.log(boxesRef);
console.log(inputRef);
console.dir(inputRef);

// const decrementBtn = document.querySelector('button[data-action="decrement"]');

function createBoxes(amount) {
  // body
}

function getRandomColor() {
  function c() {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return ('0' + String(hex)).substr(-2); // pad with zero
  }
  return '#' + c() + c() + c();
}

const color = getRandomColor();
console.log(color);


// input default value = ''

//////////////////////////////////////////////////////////////////////
// const inputRef = document.querySelector('#font-size-control');
// const textRef = document.querySelector('#text');
// inputRef.addEventListener('input', event => {
//   textRef.style.fontSize = event.target.value + 'px';
// })

// value
// element.style.backgroundColor
// style="font-size: 2em"

// change event
// dataset.length

// elemName.classList.add('className');
// elemName.classList.remove('className');

// const nameLabelRef = document.querySelector('.js-button > span');
// const licenseRef = document.querySelector('.js-license');
// const btnRef = document.querySelector('.js-button');
// const focusRef = document.querySelector('.js-focus-blur');

// focusRef.addEventListener('focus', handleInputFocus);
// focusRef.addEventListener('blur', handleInputBlur);
// inputRef.addEventListener('input', handleInputChange);
// licenseRef.addEventListener('change', handleLicenseChange);

// function handleInputFocus(event) {
//   console.log('Получил фокус');
// }
// function handleInputBlur(event) {
//   console.log('фокус потерян...');
// }
// function handleInputChange(event) {
//   nameLabelRef.textContent = event.target.value;
// }
// function handleLicenseChange(event) {
//   btnRef.disabled = !event.target.checked;
// }

// inputRef.addEventListener('change', event => {
//   if (event.target.value.length === parseInt(inputRef.dataset.length)) {
//     inputRef.classList.add('valid');
//   } else {
//     inputRef.classList.add('invalid');
//   }
// });

// inputRef.addEventListener('focus', event => {
//     inputRef.classList.remove('valid', 'invalid');
// });

// div.classList.toggle('visible', i < 10);

// console.log(div.classList.contains('foo'));

// // replace class "foo" with class "bar"
// div.classList.replace('foo', 'bar');
