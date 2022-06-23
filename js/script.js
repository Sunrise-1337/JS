const generate = () => {
    let wrap = document.createElement('div'),
        fieldWrp = document.createElement('div'),
        cube = document.createElement('img'),
        btn = document.createElement('button'),
        fishka = document.createElement('img');
    
    wrap.className = 'wrap';
    fieldWrp.className = 'field-wrap';
    cube.className = 'cube';
    btn.className = 'btn';
    fishka.className = 'fishka';

    fishka.setAttribute('src', './assets/fishka.png')
    cube.setAttribute('src', './assets/1.png')

    document.body.append(wrap);
    wrap.append(fieldWrp);
    for (let i = 0; i < 8; i++){
        let field = document.createElement('div');
        field.className = 'field';
        fieldWrp.append(field)
    }
    fieldWrp.append(fishka)
    wrap.append(cube);
    wrap.append(btn);
}

generate()

let btn = document.querySelector('.btn'),
    cube = document.querySelector('.cube'),
    fishka = document.querySelector('.fishka');
    fishLeft = 0;

function random(min, max){
    return max > min ? Math.floor(min + Math.random() * (max - min + 1)) : 'error'
}

btn.addEventListener('click', () =>{
    let num = random(1, 6);
    fishLeft = fishLeft + num < 7 ? fishLeft + num : 7;
    fishka.style.left = `${fishLeft * 100 + 50}px`
    cube.setAttribute('src', `./assets/${num}.png`)
    if (fishLeft == 7) {alert('You won')}
})