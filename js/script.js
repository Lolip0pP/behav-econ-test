function checkAnswer(button, isCorrect, moduleId) {
    const parent = button.parentElement;
    const options = parent.querySelectorAll('.quiz-option');
    const resultDiv = document.getElementById(`result${moduleId}`);

    options.forEach(opt => opt.style.pointerEvents = 'none');

    if (isCorrect) {
        button.classList.add('correct');
        resultDiv.textContent = "Верно!";
        resultDiv.style.color = "#28a745";
    } else {
        button.classList.add('wrong');
        resultDiv.textContent = "Неверно, попробуйте еще раз.";
        resultDiv.style.color = "#dc3545";
        setTimeout(() => {
            button.classList.remove('wrong');
            options.forEach(opt => opt.style.pointerEvents = 'auto');
        }, 1500);
    }
}
