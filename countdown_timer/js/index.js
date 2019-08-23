
let deadline = '2019-10-29'; // Время окончания таймера
let deadlineBox = document.getElementById('deadlineBox'); // Див куда мы это время поместим
deadlineBox.innerText = deadline; // Показываем время окнчания на странице

// Функция расчета времени 
let getTimeRemaning = (endtime) => {

    // Вычисляем остаток, между текущим временем и deadline (временем окончания таймера)
    let t = Date.parse(endtime) - Date.parse(new Date());

    // Вычисляем секунды/минуты/часы/дни из остатка выше
    let seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor( (t/1000/60/60) % 24);
        days = Math.floor( (t/(1000*60*60*24) ));

    // Добавляем нули, если цифра будет меньше 10 (0 + переменная)
    if (days <= 9) days = `0${days}`;
    if (hours <= 9) hours = `0${hours}`;
    if (minutes <= 9) minutes = `0${minutes}`;
    if (seconds <= 9) seconds = `0${seconds}`;

    // Возвращаем готовый результат
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
    
};

// Сам таймер
let setClock = (id, endtime) => {
    // Находим все еллементы на странице
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
        // Берем время из функции по расчету времени выше
        let t = getTimeRemaning(endtime);

        // Меняем содержимое div на странице
        // на соответствующее время из функции выше
        days.textContent      = t.days;
        hours.textContent     = t.hours;
        minutes.textContent   = t.minutes;
        seconds.textContent   = t.seconds;

        // По истечению времени останавливаем таймер
        // Меняем все значения на нули
        if (t.total <= 0) {
            clearInterval(timeInterval);
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
    
    // Запускаем таймер, устанавливаем время обновления
    let timeInterval = setInterval(updateClock, 1000);

};

// Запускаем функцию с таймером на странице
setClock('timer', deadline);

