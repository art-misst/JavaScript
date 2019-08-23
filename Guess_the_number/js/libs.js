
// Функция для сбора и просчета информации
window.guessNumber = function() {
    
// Функция для создания рандомного числа
let randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
}; 

// Записываю в переменную и выбераю интервал чисел
let randomNumber = randomInteger(1, 1000);

// Переменная для отображения количества попыток
let a = 10;

(function() {
    
    // Встречающее сообщение с описанием и привилами
    alert('Мы загадали случайное число, от 1 до 1000. Отгадаешь его? У тебя 10 попыток)');
    // Для проверки программы выводит загаданное число в консоль
    console.log(randomNumber);
    
    // Цикл будет идти бусконечно, пока пользователь не нажмет отмену    
    for (let i = 1; i < 11; i++) {
        // Вывожу поле ввода для сбора данных
        let num = prompt("Напиши число от 1 до 1000!"),
        // Проверка на введенные данные, ТОЛЬКО цифры 
            numTest = /^[0-9]+$/g;
        // Если исчерпаны 3 попытки, показываю число и останавливаю цикл 
        if (i === 10) {
                alert('Попытки закончились! Случайное число: ' + randomNumber + '.  Спасибо за игру! Хорошего тебе дня)');
                // Закончить цикл
                break;
            }
            // Проверка на пустое поле
        if (num != null) {
            // Проверка на пустое поле и вывод сообщения
            if (num == '') {
                alert('Ты оставил поле пустым, так не пойдет)');
                i--;
            } else {
            if (numTest.test(num)) {
                // Произвожу проверку
                if (num < randomNumber) {
                    alert('Неугадал! Число меньше нужного! Давай еще раз?)' + 'Осталось попыток - ' + (a - i));
                    i++;
                } else if (num > randomNumber) {
                    alert('Неугадал! Число больше нужного! Давай еще раз?)' + 'Осталось попыток - ' + (a - i));
                    i++;
                } else {
                    alert('Правильно! Мы загадали число: ' + randomNumber + '.  Хорошего тебе дня)');
                    // Закончить цикл
                    break; 
                }
                i--;
            } else {
                alert('Ты ввел буквы, так не пойдет! Давай попробуем еще раз)');
                i--;
            }
        }
    } else {
            // Если нажата отмена, вывести сумму введенных чисел
            alert('Мы загадали число: ' + randomNumber + '.  Хорошего тебе дня)');
            // Закончить цикл
            break;
        }
    }
})();

};



