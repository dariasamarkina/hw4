/* eslint-disable prettier/prettier */
import  { compareCards } from "./compareCards.js"

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

// получаем кол-во пар карт в зависимости от уровня
startBtn.addEventListener('click', () => {
    for (const radio of radios) {
        if (radio.checked === true) {
            selectedLevel = radio.value;
        }
    }

    let cardsQuantity = 0;

    if (selectedLevel === '1') {
        cardsQuantity = 3;
    } else if (selectedLevel === '2') {
        cardsQuantity = 6;
    } else if (selectedLevel === '3') {
        cardsQuantity = 9;
    }

    renderGamePage(cardsQuantity);
});

function renderGamePage(quantity) {
    container.innerHTML = `
                <div class="game_container">
                    <div class="game_header">
                    <div class="timer">
                        <div class="timer_header">
                            <p class="timer_min">min</p>
                            <p class="timer_sec">sec</p>
                        </div>
                        <div class="timer_clock">
                            <p class="timer_clock_indicator">00.00</p>
                        </div>
                    </div>

                    <div class="restart">
                        <button class="restart_button">Начать заново</button>
                    </div>
                </div>
                <div class="game_field">
                </div>`;
    let cardsSet = [];

    // заполняем массив парами карт
    for (let i = 0; i < quantity; i++) {
        const randomSuit = Math.floor(Math.random() * 4);
        const randomRank = Math.floor(Math.random() * 9);

        const firstEl = '../static/images/' + suits[randomSuit] + ranks[randomRank] + '.jpg';
        const secondEl = '../static/images/' + suits[randomSuit] + ranks[randomRank] + '.jpg';
        cardsSet.push(firstEl, secondEl);
    }

    shuffle(cardsSet);
    shuffle(cardsSet);
    shuffle(cardsSet);
    shuffle(cardsSet);
    shuffle(cardsSet);

    // перемешиваем массив
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
    }

    const gameField = document.querySelector('.game_field');
    
    // отображаем перемешанные карты
    for (let i = 0; i < cardsSet.length; i++) {
        const elem = document.createElement('img');
        elem.src = cardsSet[i];
        elem.classList.add('card');
        gameField.appendChild(elem);   
         
    }
    const cards = document.querySelectorAll('.card');

    // скрываем карты через 5сек
    function hideCards () {
        cards.forEach(card => {
            card.src = '../static/images/back.jpg';
        });
    }

    setTimeout(hideCards, 5000);

    compareCards(cards, cardsSet);
}





