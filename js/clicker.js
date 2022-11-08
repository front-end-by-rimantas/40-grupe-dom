const minusDOM = document.getElementById('minus');
const valueDOM = document.getElementById('value');
const plusDOM = document.getElementById('plus');

let clickCount = 0;

function update(event, action) {
    valueDOM.textContent = action >= 0 ? ++clickCount : --clickCount;
}

plusDOM.addEventListener('click', e => update(e, 1));
minusDOM.addEventListener('click', e => update(e, -1));