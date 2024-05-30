const buttons = document.querySelectorAll('.buttons');
const display = document.querySelector('.result');

for (let i = 0; i < 17; i++) {
  if (i === 16) {
    buttons[i].onclick = clear;
    continue;
  }

  if (i === 14) {
    buttons[i].onclick = equal;
    continue;
  }

  buttons[i].addEventListener('click', () => updateCalcuation(buttons[i].textContent));
}

if (!localStorage.getItem('result')) {
  localStorage.setItem('result', '');
}

display.value = localStorage.getItem('result');

function updateCalcuation(add) {
  display.value += add;
  save();
}

function clear() {
  display.value = '';
}

function equal() {
  display.value = eval(display.value);
}

function save() {
  localStorage.setItem('result', display.value);
}
