const generate = () => {
    let wrap = document.createElement('div'),
        enHead = document.createElement('h2'),
        enemy = document.createElement('div'),
        plHead = document.createElement('h2'),
        playerWrap = document.createElement('div'),
        scissors = document.createElement('img'),
        rock = document.createElement('img'),
        paper = document.createElement('img');
    
    wrap.className = 'wrap';
    enHead.className = 'enHead';
    enemy.className = 'enemy';
    plHead.className = 'plHead';
    playerWrap.className = 'playerWrap';
    scissors.className = 'scissors pic';
    rock.className = 'rock pic';
    paper.className = 'paper pic';

    rock.setAttribute('src', './assets/rock.png')
    scissors.setAttribute('src', './assets/scissors.png')
    paper.setAttribute('src', './assets/paper.png')

    enHead.innerText = 'Enemy:'
    plHead.innerText = 'Your choice?'

    document.body.append(wrap);
    wrap.append(enHead);
    wrap.append(enemy);
    wrap.append(plHead);
    wrap.append(playerWrap);
    playerWrap.append(rock);
    playerWrap.append(scissors);
    playerWrap.append(paper);
}

generate()

let enemy = document.querySelector('.enemy'),
    rockZ = document.querySelector('.rock'),
    scissorsZ = document.querySelector('.scissors'),
    paperZ = document.querySelector('.paper'),
    choice = '',
    enChoice = '',
    game = {
        rock: 'paper',
        paper: 'scissors',
        scissors: 'rock',
    };

function click(opt){
    choice = opt
    enemyTurn()
    check(opt)
}

function enemyTurn(){
    let enChoi = Math.floor(Math.random() * (2 + 1))
    switch(enChoi) {
        case 0:
            enChoice = 'rock'
            break
      
        case 1:
            enChoice = 'scissors'
            break
        case 2:
            enChoice = 'paper'
            break
    }
}

function check(opt){
    let enPic = document.querySelector('.enPic');

    if (!enPic) {
        let ePi = document.createElement('img');
        ePi.className = 'enPic';
        ePi.setAttribute('src', `./assets/${enChoice}.png`);
        enemy.append(ePi);
    } else {
        enPic.setAttribute('src', `./assets/${enChoice}.png`);
    }

    if (opt == enChoice) return alert('Tie')

    enChoice == game[opt] ? alert('You lost') : alert('You won')
}

rockZ.addEventListener('click', () =>{
    click(`rock`)
})

scissorsZ.addEventListener('click', () =>{
    click(`scissors`)
})

paperZ.addEventListener('click', () =>{
    click(`paper`)
})