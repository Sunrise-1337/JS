// Задача 1
var min = prompt('Number?');

if (min <= 15){
    alert('Первая четверть часа')
} else {
    if (min > 15 && min <= 30){
        alert('Вторая четверть часа')
    }

    if (min > 30 && min <= 45){
        alert('Третья четверть часа')
    }

    if (min > 45){
        alert('Четвёртая четверть часа')
    }
};

// Задача 2

var a = '1';

if (a === '1'){
    alert('Верно')
} else {
    alert('Не верно')
};

// Задача 3

var test = confirm('Yes or no?');

if (test != true){
    alert('Верно')
} else {
    alert('Не верно')
};

test != true ? alert('Верно') : alert('Не верно');

// Задача 4

var a = prompt('Number?');

if (a > 0 && a < 5) {
    alert('Верно')
} else {
    alert('Не верно')
};

// Задача 5

var num = prompt('Number?');

if (num == 1){
    result = 'зима'
} else {
    if (num == 2){
        result = 'весна'
    }

    if (num == 3){
        result = 'лето'
    }

    if (num == 4){
        result = 'осень'
    }
};

alert(result);