// Условие

var ships = ['1-a', '3-a', '4-a', '6-b', '2-c', '6-c', 
'2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h', '3-h', '4-h'];
var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Генерация кнопок

function createBtn(text){
    var btn = document.createElement('button');
    btn.className = 'button' + ' click';
    btn.innerHTML = text;
    var wrap = document.querySelector('.wrap');
    wrap.append(btn)
}

// Генерация поля

function start(){
    var div = document.createElement('div');
    var body = document.querySelector('body');

    div.className = 'wrap';
    body.append(div)

    for (var i = 0; i < field.length; i++) {
        for (var m = 0; m < field.length; m++) {
            createBtn('' + (m + 1) + '-' + field[i]);
        }
    }
}

// Ивент

document.addEventListener('click', function (e){
    var elem = e.target;
    var check = elem.matches('.click');
    if (check) {
        if (ships.includes(elem.textContent)){
            elem.classList.add('muerto')
            alert('Попадание!')
        } else {
            elem.classList.add('mar')
        }
        elem.classList.remove('click')
    }
})

start()
