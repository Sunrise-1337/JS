// Переменные

var step = 5;

var opt = {
    move: true,
}

// Генерация танка

function start(){
    var tWrap = document.createElement('div');
    tWrap.className = 'wrap';
    var tank = document.createElement('img');
    tank.className = 'tank';
    tank.setAttribute('src', './assets/1.gif');
    var fire = document.createElement('img');
    fire.className = 'fire';
    fire.setAttribute('src', './assets/2.png')
    fire.hidden = true
    var bullet = document.createElement('img');
    bullet.className = 'bullet';
    bullet.setAttribute('src', './assets/3.png')
    bullet.hidden = true
    var body = document.querySelector('body');

    body.append(tWrap)
    tWrap.prepend(tank)
    tWrap.prepend(fire)
    tWrap.prepend(bullet)
}

// Движение

document.addEventListener('keydown', function (e){
    var tank = document.querySelector('.wrap');
    var wTank = tank.getBoundingClientRect().width;
    var hTank = tank.getBoundingClientRect().height;
    var lTank = tank.getBoundingClientRect().left;
    var tTank = tank.getBoundingClientRect().top;
    var fire = document.querySelector('.fire');
    var bullet = document.querySelector('.bullet');
    var top = parseInt(getComputedStyle(tank).top) || 0

    if (opt.move){
        switch (e.code) {
            case "KeyA":
                if (lTank < 0){
                    tank.style.left = 0 + 'px'
                } else {
                    tank.style.left = lTank - step + 'px'
                }

                tank.style.transform = 'rotate(0deg)';
              break;

            case "KeyD":
                if (lTank >= window.innerWidth - wTank - step){
                    tank.style.left = window.innerWidth - wTank + 'px'
                } else {
                    tank.style.left = lTank + step + 'px'
                }

                tank.style.transform = 'rotate(180deg)';
              break;

            case "KeyW":
                if (tTank < 160){
                    tank.style.top = 160 + 'px'
                } else {
                    tank.style.top = top - step + 'px'
                }

                tank.style.transform = 'rotate(90deg)';
              break;

            case "KeyS":
                if (tTank >= window.innerHeight - hTank - step){
                    tank.style.top = top + 'px'
                } else {
                    tank.style.top = top + step + 'px'
                }

                tank.style.transform = 'rotate(270deg)';
              break;
        }
    }
    
    if(e.code === "Space"){
        fire.hidden = false
        bullet.hidden = false
        opt.move = false

        setTimeout(function (){
            fire.hidden = true
            bullet.hidden = true
            opt.move = true
        }, 2000)
    }
})

start()