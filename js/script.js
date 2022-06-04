// Переменные
var text = document.querySelector('.timer'),
    wrap = document.querySelector('.wrap'),
    opt = {
        game: false,
        catMove: false,
        result: false,
        crash: false,
    },
    min = 0,
    sec = 0,
    catTop = 0,
    catLeft = 0,
    body = document.querySelector('body'),
    x1 = 0,
    x2 = 0,
    y1 = 0,
    y2 = 0,
    spawnCount = 0;

// Начало игры по клику

body.addEventListener('click',function start(){
    var mouse = document.createElement('img'),
        wrap = document.querySelector('.wrap');

    mouse.className = 'mouse';
    mouse.setAttribute('src', './assets/mouse.png');
    mouse.style.top = 50 + '%';
    mouse.style.left = 50 + '%';

    wrap.prepend(mouse)
    opt.game = true
    startSec()


    var cat = document.createElement('img'),
        wrap = document.querySelector('.wrap');

    cat.className = 'cat';
    cat.setAttribute('src', './assets/cat.png');
    cat.style.top = 110 + '%';
    cat.style.left = 110 + '%';
    wrap.prepend(cat)
    opt.catMove = true

}, {'once': true})

// Таймер

function startSec(){
    setInterval(function (){
        if (opt.game){
            if (min < 10) {
                text.innerHTML = '' + 0 + min + ':'
            } else {
                text.innerHTML = '' + min + ':'
            }
    
            if (sec < 10) {
                text.innerHTML += '0' + sec;
            } else {
                text.innerHTML += sec;
            }
                
            if (sec == 59){
                min++
                sec = -1
            }
                
            sec++
            spawnCount++
            if (spawnCount%5 == 0){
                spawnBlock()
            }
        }

        if (opt.result){
            var timer = document.querySelector('.timer');
            timer.hidden = false;
        }
    }, 1000);
}

// Движение мыши

wrap.addEventListener('mousemove', function (e){
    var mouse = document.querySelector('.mouse'),
        cat = document.querySelector('.cat');

    if (opt.game && !opt.crash){
        mouse.style.top = e.clientY + 'px';
        mouse.style.left = e.clientX + 'px';
        x1 = e.clientX
        y1 = e.clientY

        if (opt.catMove){
            setTimeout(function (){
                cat.style.top = e.clientY + 'px';
                cat.style.left = e.clientX + 'px';

                x2 = e.clientX
                y2 = e.clientY

                if (x1 == x2 && y1 == y2){
                    opt.game = false
                    opt.result = true
                    alert('Конец игры')
                }
            }, 2000)
        }
    }
})

// Спавн блоков

function spawnBlock(){
    if (opt.game){

        var block = document.createElement('div'),
            wrap = document.querySelector('.wrap');

        block.className = 'block';


        console.log('' + random(1, window.innerHeight) + 'px')
        block.style.top = '' + random(1, window.innerHeight) + 'px';
        block.style.left =  '' + random(1, window.innerWidth) + 'px';
        block.style.width =  '' + random(50, 150) + 'px';
        block.style.height =  '' + random(50, 150) + 'px';

        wrap.prepend(block);
    }
    var block = document.querySelectorAll('.block');
    block.forEach(function (elem){
        elem.addEventListener('mouseover', function (e){
            opt.crash = true
        })
    })
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
