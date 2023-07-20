export function compareCards(cards, cardsSet) {
    console.log(typeof cardsSet);
    let firstCard = '';
    let secondCard = '';
    let pairs = 0;

    // сравниваем выбранные карты и сообщаем результат
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener('click', (e) => {
            const target = e.target;
            target.src = cardsSet[i];
            if (!firstCard) {
                firstCard = cardsSet[i];
            } else {
                secondCard = cardsSet[i];

                if (firstCard === secondCard) {
                    pairs += 1;

                    if (pairs === cardsSet.length / 2) {
                        alert('Вы выиграли!');
                    }
                } else {
                    alert('Вы проиграли!');
                }

                firstCard = '';
                secondCard = '';
            }
        });
    }

    function handleTimer() {
        const sec = document.querySelector('.timer_clock_sec');
        const min = document.querySelector('.timer_clock_min');
    
        sec.textContent++;
        if (sec.textContent <= 9) {
            sec.textContent = '0' + sec.textContent;
        } 
    
        if (sec.textContent >= 60) {
            min.textContent++;
            if (min.textContent < 10) {
                min.textContent = '0' + min.textContent;
            } 
            sec.textContent = '00';
        }
    
        // if (sec.textContent == 15) {
        //     clearInterval(Iteration);
        //   }
    }
    // let Iteration = setInterval(handleTimer, 1000);

    function timerInterval () {
        setInterval(handleTimer, 1000);
    }
    
    function timerTimeout() {
        setTimeout(timerInterval, 5000);
    }
    
    timerTimeout();
}




