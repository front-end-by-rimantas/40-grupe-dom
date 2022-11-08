const h1DOM = document.getElementById('main-title');
// const ulDOM = document.getElementsByTagName('ul')[0];
// const liDOM = ulDOM.getElementsByTagName('li');
const liDOM = document.querySelectorAll('ul > li');


const h1Text = h1DOM.innerText;
console.log(h1Text);

h1DOM.textContent = 'Labas rytas, Lietuva!';

for (let i = 0; i < liDOM.length; ++i) {
    console.log(liDOM[i].innerText);
    console.log(liDOM[i].textContent);
}

console.log('######################');
for (const liElement of liDOM) {
    console.log(liElement.className);
    console.log(liElement.classList);
    for (const x of liElement.classList) {
        console.log(x);
    }
}

console.log('######################');
for (const liElement of liDOM) {
    const rez = liElement.classList.contains('item');
    if (rez) {
        console.log('Turiu item', rez);
    } else {
        console.log('Neturiu item', rez);
    }
}

for (const liElement of liDOM) {
    liElement.classList.toggle('red');
}

for (const liElement of liDOM) {
    liElement.classList.add('red');
}

for (const liElement of liDOM) {
    liElement.classList.remove('red');
}

h1DOM.classList.add('red');