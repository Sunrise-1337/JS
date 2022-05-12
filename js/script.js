// Задача 1

var tSet = prompt('Введите время в формате чч:мм');
var time = tSet.split(':');

var clock = setInterval(function (){
    var trash = new Date(),
    tSet2 = trash.toLocaleTimeString(),
    time2 = tSet2.split(':');

    document.getElementById('clock').innerHTML = tSet2;

    if (time[0] == time2[0] && time[1] == time2[1]){
        alert('Wake up, Samurai. We have a city to burn')
        return clearInterval(clock)
    }
}, 1000);