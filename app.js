const answers = document.querySelectorAll('.question-text');
const buttons = document.querySelectorAll('.btn');

const showText = (e) => {
    const question = e.target.parentElement.parentElement.querySelector('.question-text');

    question.classList.toggle('show-text');
}

buttons.forEach((btn) => {
    btn.addEventListener('click', showText);
});