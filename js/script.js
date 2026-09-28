// Логика проверки тестов
function checkAnswer(moduleId, correctAnswer) {
    const selected = document.querySelector(`input[name="q${moduleId}"]:checked`);
    const resultDiv = document.getElementById(`result${moduleId}`);
    
    if (!selected) {
        resultDiv.textContent = "Пожалуйста, выберите ответ.";
        resultDiv.style.color = "orange";
        return;
    }

    if (selected.value === correctAnswer) {
        resultDiv.textContent = "Верно!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Попробуйте еще раз.";
        resultDiv.style.color = "red";
    }
}
