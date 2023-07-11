const container = document.querySelector('.container');
let startHtml = ``;

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const ranks = [
    'Ace',
    'King',
    'Queen',
    'Jack',
    'Ten',
    'Nine',
    'Eight',
    'Seven',
    'Six',
];

function renderStartPage() {
    startHtml = `
        <div class="level_block">
            <h2 class="title">Выбери сложность</h2>
            <div class="radio_block">
                <input type="radio" class="level_options" name="radios" id="radio_1" value="1">
                <label class="radio_label" for="radio_1">1</label>

                <input type="radio" class="level_options" name="radios" id="radio_2" value="2">
                <label class="radio_label" for="radio_2">2</label>

                <input type="radio" class="level_options" name="radios" id="radio_3" value="3">
                <label class="radio_label" for="radio_3">3</label>
            </div>
            <button class="start_button">Старт</button>
        </div>`;

    container.innerHTML = startHtml;
}

renderStartPage();

const startBtn = document.querySelector('.start_button');
const radios = document.querySelectorAll('.level_options');

let selectedLevel = 0;

startBtn.addEventListener('click', () => {
    for (const radio of radios) {
        if (radio.checked === true) {
            selectedLevel = radio.value;
        }
    }

    console.log(selectedLevel);
    let cardsQuantity = 0;

    if (selectedLevel == 1) {
        cardsQuantity === 6;
    } else if (selectedLevel == 2) {
        cardsQuantity === 12;
    } else if (selectedLevel == 3) {
        cardsQuantity === 18;
    }

    renderGamePage(cardsQuantity);
});

function renderGamePage(quantity) {
    container.innerHTML = ``;
    let cardsSet = [];

    for (let i = 0; i < quantity; i++) {
        const randomSuit = Math.floor(Math.random() * 4);
        const randomRank = Math.floor(Math.random() * 9);

        const cardPath =
            '../images' + suits[randomSuit] + ranks[randomRank] + '.jpg';

        const cardEl = document.createElement('IMG');
        cardEl.src = cardPath;
        cardEl.classList.add('card');

        container.appendChild(cardEl);
        cardsSet.push(cardEl);
    }

    const firtsCard = Math.floor(Math.random() * quantity);
    let secondCard = firtsCard;

    while (secondCard === firtsCard) {
        secondCard = Math.floor(Math.random() * quantity);
    }

    cardsSet[secondCard].src = cardsSet[firtsCard].src;

    // const body = document.querySelector('body');
    // body.appendChild(cardGameField);

    setTimeout(hideCards, 5000);
}
