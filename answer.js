function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var allAnswers = document.querySelectorAll('.answer');

    // Закрываем предыдущий открытый ответ
    allAnswers.forEach(function(item) {
        if (item.id !== id && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });

    // Переключаем класс .active для текущего ответа
    answer.classList.toggle('active');
}