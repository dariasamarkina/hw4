export     function compareCards(cards, cardsSet) {
    let firstCard = '';
    let secondCard = '';
    let result = '';

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
                        result = true;
                        alert('Вы выиграли');
                    } else {
                        result = false;
                        alert('Вы проиграли');
                    }
                    return result;
                }
            })   
    }
}