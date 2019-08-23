const clock = () => {
    
     let  a = new Date(),
          day = a.getDate(), // Нахожу текущее число / день
          month = a.getMonth() + 1, // Нахожу текущий месяц (начинается с нуля, поэтому добавляю +1)
          year = a.getFullYear(), // Нахожу текущий год
          hours = a.getHours(), // Нахожу текущие часы
          minutes = a.getMinutes(), // Нахожу текущие минуты 
          seconds = a.getSeconds(); // Нахожу текущие секунды

    // Добавляю ноли в начало цифр, если нужно
    if (day <= 9) day = '0' + day;
    if (month <= 9) month = '0' + month;
    if (hours <= 9) hours = '0' + hours;
    if (minutes <= 9) minutes = '0' + minutes;
    if (seconds <= 9) seconds = '0' + seconds;
    
    // Создаю переменную для вывода на экран 
    let date_time = `    Текущая дата  - ${day}:${month}:${year} <br>
                         Текущее время - ${hours}:${minutes}:${seconds} `;
    
    // Записываю в HTML 
    if (document.layers) {
     document.layers.doc_time.document.write(date_time); 
     document.layers.doc_time.document.close();
    }  // Создаю анимацию  
    else document.getElementById('doc_time').innerHTML = date_time;
     setTimeout('clock()', 1000);

};

clock();