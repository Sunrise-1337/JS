var slidesS = ['https://picsum.photos/500/500', 
            'https://picsum.photos/600/600', 
            'https://picsum.photos/700/700'];

// Генерация
function generate(array){
    let slider = document.createElement('div');
    slider.className = 'slider';
    
    let wrap = document.createElement('div');
    wrap.className = 'slider__wrap';

    let ul = document.createElement('ul');
    ul.className = 'slider__ul';
    
    let controls = document.createElement('div');
    controls.className = 'slider__controls';

    let sliderNext = document.createElement('button');
    sliderNext.className = 'slider__next slider-btn';
    sliderNext.innerText = '>';

    let sliderPrevious = document.createElement('button');
    sliderPrevious.className = 'slider__previous slider-btn';
    sliderPrevious.innerText = '<';

    let upperRow = document.createElement('div');
    upperRow.className = 'slider__upper-row';

    document.body.prepend(slider)
    slider.prepend(upperRow)

    upperRow.append(sliderPrevious)
    upperRow.append(wrap)
    upperRow.append(sliderNext)

    wrap.append(ul)
    slider.append(controls)

    array.forEach((elem) => {
        let li = document.createElement('li')
        li.className = 'li';
        let img = document.createElement('img');
        img.className = 'picture';
        img.setAttribute('src', elem)
        ul.append(li)
        li.append(img)
        let circ = document.createElement('div')
        circ.className = `circle`;
        controls.append(circ)
    });

    const first = document.querySelector('.circle');
    first.classList.add('circ-active')
}

generate(slidesS)

const btn = document.querySelectorAll('.slider-btn');
const mover = document.querySelector('.slider__wrap ul');
const slides = mover.querySelectorAll('li');
const circs = document.querySelectorAll('.circle')
let count = 0;
slides[count].classList.add('active')

const onMove = () => {
    const active = mover.querySelector('.active')
    const circAct = document.querySelector('.circ-active')
    const next = active.nextElementSibling
    const nextCirc = circAct.nextElementSibling
    let width = 0
    if(next){
        width = getComputedStyle(next).width
        count++;
        active.classList.remove('active')
        circAct.classList.remove('circ-active')
        next.classList.add('active')
        nextCirc.classList.add('circ-active')
        mover.style.transform = `translateX(${-parseInt(width) * count}px)`
    } else {
        count = 0;
        active.classList.remove('active')
        slides[count].classList.add('active')
        mover.style.transform = `translateX(${-parseInt(width) * count}px)`
        circAct.classList.remove('circ-active')
        circs[count].classList.add('circ-active')
    }
}

const offMove = () => {
    const active = mover.querySelector('.active')
    const prev = active.previousElementSibling
    const circAct = document.querySelector('.circ-active')
    const prevCirc = circAct.previousElementSibling
    let width = 0
    if(prev){
        width = getComputedStyle(prev).width
        count--;
        active.classList.remove('active')
        circAct.classList.remove('circ-active')
        prevCirc.classList.add('circ-active')
        slides[count].classList.add('active')
        mover.style.transform = `translateX(${-parseInt(width) * count}px)`
    } else {
        active.classList.remove('active')
        circAct.classList.remove('circ-active')
        count = slidesS.length;
        count--;
        slides[count].classList.add('active')
        circs[count].classList.add('circ-active')
        width = getComputedStyle(slides[count]).width
        mover.style.transform = `translateX(${-parseInt(width) * count}px)`
    }
}

btn.forEach(elem => {
    if(elem.classList.contains('slider__next')){
        elem.addEventListener('click', onMove)
    } else {
        elem.addEventListener('click', offMove)
    }
})