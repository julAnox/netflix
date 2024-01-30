function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var allAnswers = document.querySelectorAll('.answer');

    allAnswers.forEach(function(item) {
        if (item.id !== id) {
            item.classList.remove('active');
        }
    });

    answer.classList.toggle('active');
}