const levels = document.querySelectorAll('.level_options');
const startBtn = document.querySelector('.start_button');
let selectedLevel = 0;

startBtn.addEventListener('click', () => {

    for (level of levels) {
        if (level.checked) {
            selectedLevel = level.value;
        }
    }

    console.log(selectedLevel);
    link = `/${selectedLevel}-level.html`;
    console.log(link);
    
    window.location.href = link;
})


