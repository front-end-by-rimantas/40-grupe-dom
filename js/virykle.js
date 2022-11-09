function updateColors() {
    const styleDOM = document.querySelector('head > style');
    const randomColor = () => Math.floor(Math.random() * 256);
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();
    const CSS = `:root {
                        --color: rgb(${r}, ${g}, ${b});
                    }`;
    styleDOM.innerHTML = CSS;
}

function virykle(size) {
    const DOM = document.getElementById('virykle');

    let skylesHTML = '';
    let jugikliaiHTML = '';
    for (let i = 0; i < size; ++i) {
        skylesHTML += '<div class="skyle"></div>';
        jugikliaiHTML += '<div class="jungiklis"></div>';
    }

    const HTML = `<div class="top">${skylesHTML}</div>
                <div class="bottom">${jugikliaiHTML}</div>`;

    DOM.innerHTML = HTML;
    DOM.classList.add('virykle');

    const rowSize = Math.ceil(Math.sqrt(size));
    const virykleWidth = rowSize * 100 + (rowSize + 1) * 10;
    DOM.style.width = virykleWidth + 'px';

    const allSkylesDOM = DOM.querySelectorAll('.skyle');
    const allJungikliaiDOM = DOM.querySelectorAll('.jungiklis');

    for (let i = 0; i < size; ++i) {
        allJungikliaiDOM[i].addEventListener('click', () => {
            allJungikliaiDOM[i].classList.toggle('ijungta');
            allSkylesDOM[i].classList.toggle('ijungta');
            updateColors();
        })
    }
}

virykle(4);