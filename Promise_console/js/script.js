
// Выполняется функция
function shoot(arrow) {
    // Делаем действие - выстрел 
    console.log('Вы сделали выстрел..');
    // Создается обещание, в котором 2 состояния 
    let promise = new Promise(function(resolve, reject) {
        // Через 3 секунды, выполнится действие
        setTimeout(function() {
            // Если выполниться то resolve / если нет то reject 
            Math.random() > 5 ? resolve({}) : reject('Вы промахнулись'); 
        }, 3000);
    });
    
    return promise; 
}

// Если промис вернул resolve (в случае победы)
function win() {
    console.log('Вы победили!');
    giveMoney();
}
function giveMoney() {
    console.log('Вам заплатили деньги');
}

// Если промис вернул reject (в случае поражения)
function loose() {
    console.log('Вы проиграли!');
}

// Запускаем функцию с промисом
shoot({})
    .then(mark => console.log('Вы попали в цель!')) // В случае победы (resolve)
    .then(win) // В случае победы (resolve)
    .catch(loose); // В случае поражения (reject)

