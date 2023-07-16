export function compareCards(cards, cardsSet) {
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

                        if (pairs === cardsSet.length/2) {
                            alert('Вы выиграли!');
                        }

                    } else {
                        alert('Вы проиграли!');
                    }

                    firstCard = '';
                    secondCard = '';
            }
        })   
    }
}
 
