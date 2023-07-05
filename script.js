const container = document.querySelector('.container');
let startHtml = ``;

function renderStartPage () {
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
        </div>`

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
    renderGamePage(selectedLevel);
})

function renderGamePage(level) {
    container.innerHTML = ``;
    gamePageHtml = `
        <div class="level_block">
            <h2 class="title">Уровень сложности: ${level}</h2>   
        </div>`
        container.innerHTML = gamePageHtml;
}