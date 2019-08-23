
// Пользователь выбирает играть или нет
(start = () => {
    for(let i = 0; i < 1; i++) {
        let a = prompt('Поиграем?');
        if(a == null) {
            alert('Хорошо, поиграем в другой раз)');
            i++;
        } else {
            window.guessNumber();
            i--;
        }
    }
})();

 