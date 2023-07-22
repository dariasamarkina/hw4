/* eslint-disable prettier/prettier */
import { renderStartPage } from './script.ts';

export function compareCards(cards: any, cardsSet: any) {
    console.log(typeof cardsSet);
    let firstCard = '';
    let secondCard = '';
    let pairs = 0;
    let timerId: number;
    let spentTime = '';

    timerTimeout();
    // перезапуск с экрана игры
    const restartBtn = document.querySelector('.restart_button');
    restartBtn?.addEventListener('click', () => {
        clearTimeout(timerId);
        renderStartPage();
    });

    // сравниваем выбранные карты и сообщаем результат
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener('click', (e) => {
            const target = e.target;
            target.src = cardsSet[i];
            const gameContainer = document.querySelector('.game_container');
            let gameHtml = gameContainer?.innerHTML;

            if (!firstCard) {
                firstCard = cardsSet[i];
            } else {
                secondCard = cardsSet[i];

                if (firstCard === secondCard) {
                    pairs += 1;

                    if (pairs === cardsSet.length / 2) {
                        clearTimeout(timerId);
                        gameHtml += `
                        <div class="result_container">
                            <div class="result_block">
                                <img class="result_image" src="./static/images/celebration.svg" alt="win">
                                <h2 class="result_title">Вы выиграли!</h2>
                                <h3 class="result_message">Затраченное время</h3>
                                <h1 class="result_time">${spentTime}</h1>
                                <button class="again_button">Играть снова</button>
                            </div>
                        </div>`;

                        gameContainer.innerHTML = gameHtml;

                        const restartGame =
                            document.querySelector('.again_button');
                        restartGame?.addEventListener('click', () => {
                            renderStartPage();
                        });
                    }
                } else {
                    clearTimeout(timerId);
                    gameHtml += `
                    <div class="result_container">
                        <div class="result_block">
                            <img class="result_image" src="./static/images/dead.svg" alt="win">
                            <h2 class="result_title">Вы проиграли!</h2>
                            <h3 class="result_message">Затраченное время</h3>
                            <h1 class="result_time">${spentTime}</h1>
                            <button class="again_button">Играть снова</button>
                        </div>
                    </div>`;

                    gameContainer?.innerHTML? = gameHtml;

                    const restartGame = document.querySelector('.again_button');
                    restartGame?.addEventListener('click', () => {
                        renderStartPage();
                    });
                }

                firstCard = '';
                secondCard = '';
            }
        });
    }

    // изменение значений на таймере
    function handleTimer() {
        const sec = document.querySelector('.timer_clock_sec');
        const min = document.querySelector('.timer_clock_min');

        sec?.textContent?++;
        if (sec?.textContent? <= 9) {
            sec?.textContent? = '0' + sec.textContent;
        }

        if (sec?.textContent? >= 60) {
            min?.textContent?++;
            if (min?.textContent? < 10) {
                min?.textContent? = '0' + min.textContent;
            }
            sec?.textContent? = '00';
        }
        spentTime = min?.textContent? + `.` + sec?.textContent?;
        return spentTime;
    }

    // задаем интервал изменений значений на таймере = 1 сек
    function timerInterval() {
        timerId = setInterval(handleTimer, 1000);
        return timerId;
    }

    // запуск таймера через 5сек
    function timerTimeout() {
        setTimeout(timerInterval, 5000);
    }
}
