const kebabai = [
    // {
    //     size: 'didelis/mazas',
    //     main: 'jautiena/vistiena',
    //     sauce: 'cesnakinis/mix/pikantiskas',
    // },
    {
        size: 'didelis',
        main: 'jautiena',
        sauce: 'cesnakinis',
    },
    {
        size: 'mazas',
        main: 'vistiena',
        sauce: 'mix',
    },
    {
        size: 'mazas',
        main: 'nesvarbu',
        sauce: 'pikantiskas',
    },
];

const formatWord = s => s[0].toUpperCase() + s.slice(1);

let HTML = '';

for (const kebabas of kebabai) {
    HTML += `<li>${formatWord(kebabas.size)} su ${kebabas.main} ir <span class="red">${kebabas.sauce}</span></li>`;
}

const kebabaiDOM = document.querySelector('#kebabai > ul');

kebabaiDOM.innerHTML = HTML;

const liDOM = kebabaiDOM.querySelectorAll('li');
console.log(liDOM);

for (const singleKebebasDOM of liDOM) {
    singleKebebasDOM.classList.add('big');
}
