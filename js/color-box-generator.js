
const inputRef = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let currentBoxSize = 200;

// render
renderBtn.addEventListener('click', renderHandler);
function renderHandler() {
  const boxesToCreate = inputRef.valueAsNumber;
  if (boxesToCreate >= 1) {
    createBoxes(boxesToCreate);
  }
}

function createBoxes(amount) {
  const boxes = new Array();
  for (let i = 0; i < amount; i += 1) {
    const boxRef = createBox(currentBoxSize);
    boxes.push(boxRef);
    // currentBoxSize;
  }
  boxesRef.append(...boxes);
}

function createBox(currentBoxSize) {
  const box = document.createElement('div');
  box.style.width = currentBoxSize + 'px';
  box.style.height = currentBoxSize + 'px';
  box.style.backgroundColor = getRandomColor();
  box.style.marginTop = '5px';
  box.style.marginRight = '5px';
  return box;
}

function getRandomColor() {
  function c() {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return ('0' + String(hex)).substr(-2); // pad with zero
  }
  return '#' + c() + c() + c();
}

// destroy
destroyBtn.addEventListener('click', destroyHandler);
function destroyHandler() {
  // currentBoxSize = 30;
  // inputRef.value = '';
  boxesRef.querySelectorAll('div').forEach(element => element.remove());
}

// background color
const backgroundBtn = document.querySelector('#background');
backgroundBtn.addEventListener('click', event => {
  boxesRef.classList.toggle('background');
});
