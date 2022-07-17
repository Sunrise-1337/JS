$(document).ready(function (){
    let arr = [{
        quest: 'Известная рыба-клоун и капитан из Книги тысяча лье под водой',
        answ: 'Немо',
    },
    {
        quest: 'Зимой и летом одним цветом',
        answ: 'Елка',
    },{
        quest: 'Губит людей не ... губит людей вода',
        answ: 'Пиво',
    },{
        quest: 'Лучник из Властелина колец',
        answ: 'Леголас',
    },{
        quest: 'Фамилия главного героя аниме Король шаманов Йо',
        answ: 'Асакура',
    },{
        quest: 'Муха из Чипа и Дейла',
        answ: 'Вжик',
}]

const wheel = {
    rot: 0, // ячейка
    section: 16, // к-во ячеек
    proc: 0,
    score: 0,
}

const opt = {
    gameOver: false,
    spinWheel: 0,
}

function random(min, max){
    return max > min ? Math.floor(min + Math.random() * (max - min + 1)) : 'error'
}

let item = arr[random(0, arr.length-1)],
    lettersAm = item.answ.length;

$('.wrapQuest').text(item.quest)

$('.send').on('click', () => {
    let elem = $('.myLetter')[0].value.toLowerCase();

    if (elem.length == 1){
        let check = item.answ.split(''),
            count = 0;

        check.forEach((el, i)=>{
            if (elem == el.toLowerCase()) {
                $('.itemLetter')[i].innerText = check[i]
                count++
            }
        })
        opt.spinWheel = count
        

        if (count == 1) {
            alert('Крутите барабан!')
        } else { 
            if (count > 1) {
                alert(`Крутите барабан! x${count}`)
            } else {
                lose()
            }
        }
    } else {
        alert('Too many letters')
    }
})

$('.roll').on('click', function (e){
    if (opt.spinWheel > 0) {
        opt.spinWheel -= 1
        e.preventDefault()
        let dok = 16-opt.rot;
        opt.rot = Math.floor(Math.random() * opt.section + 1 )
        let col = Math.floor((Math.random() * 2) + 4)
        opt.proc += (opt.rot + col*16 + dok) * 22.5
        $('.baraban').animate({  textIndent: opt.proc }, {
            duration: 5000,
            complete: function() {
                switch(opt.rot){
                    case 3:
                    case 5:
                    case 11: opt.score+=100; break;
                    case 1:
                    case 10:
                    case 7: {
                        //console.log('Действие');
                        let a = Math.floor((Math.random() * 10) + 1);
                        let b = Math.floor((Math.random() * 10) + 1);
                        let answear = prompt(a + '*' + b);
                        if (answear == (a*b)) opt.score+=150;
                    }; break;
                    case 2:
                    case 9: opt.score+=300; break;
                    case 6:
                    case 12: opt.score+=200; break;
                    case 4:
                    case 8: {
                        alert('Вы проиграли');
                        opt.score=0;
                    }; break;
                }
                $('.score').text(opt.score)
            },
            easing : 'swing',
            step: function(now) {
                $(this).css('-webkit-transform','rotate('+now+'deg)');
            }
        })
    }
})

let lose = function(){
    alert(`Вы проиграли`)
    $('.score').text('0')
}

for (var i = 0; i < lettersAm; i++){
    let li = document.createElement('li');
    $('ul').append(li)
    $('li').addClass('itemLetter')
}
})