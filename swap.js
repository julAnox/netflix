function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    var plusIcon = event.currentTarget.querySelector('.plus');
    var crossIcon = event.currentTarget.querySelector('.cross');

    // Переключаем видимость ответа
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        plusIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    } else {
        answer.style.display = 'block';
        plusIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
    }
}