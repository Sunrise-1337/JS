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
        score: 0
    }

    const opt = {
        gameOver: false,
        spinWheel: 0,
        time: true,
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

            let winCheck = [];

            if (opt.spinWheel) {
                Array.from($('.itemLetter')).forEach((el) => {
                    winCheck.push(el.innerText)
                    if (winCheck.join('') == item.answ) {
                        endgame('win')
                    }
                })
            } 

            if (!opt.gameOver) {
                if (count == 1) {
                    alert('Крутите барабан!')
                } else { 
                    if (count > 1) {
                        alert(`Крутите барабан! x${count}`)
                    } else {
                        endgame('lose')
                    }
                }
            }
        } else {
            alert('Too many letters')
        }

        $('.myLetter')[0].value = ''
    })

    const timer = () => {
        if (!opt.time) return clearInterval(clock)
        $('.timer').text('10')
        let clock = setTimeout(function() {
            let num = Number($('.timer')[0].innerText);
            num -= 1
            timer()
            $('.timer').text(num)
            if (num == 0) {
                endgame('lose')
                clearInterval(clock)
                $('.timer').text('0')
            }
        }, 1000)
    }

    $('.roll').on('click', function (e){
        e.preventDefault()
        if (opt.spinWheel > 0) {
            opt.time = false
            opt.spinWheel -= 1
            let dok = 16-wheel.rot;
            wheel.rot = Math.floor(Math.random() * wheel.section + 1 )
            let col = Math.floor((Math.random() * 2) + 4)
            wheel.proc += (wheel.rot + col*16 + dok) * 22.5
            $('.baraban').animate({  textIndent: wheel.proc }, {
                duration: 5000,
                complete: function() {
                    switch(wheel.rot){
                        case 0: wheel.score+=300; break;
                        case 1: wheel.score+=200; break;
                        case 2: wheel.score = wheel.score > 0 ? wheel.score * 3 : wheel.score; break;
                        case 3: wheel.score+=700; break;
                        case 4: break;
                        case 5: wheel.score+=1000; break;
                        case 6: wheel.score+=100; break;
                        case 7: wheel.score = wheel.score > 0 ? wheel.score * 2 : wheel.score; break;
                        case 8: wheel.score+=600; break;
                        case 9: wheel.score+=800; break;
                        case 10: wheel.score+=1; break;
                        case 11: wheel.score+=400; break;
                        case 12: wheel.score+=900; break;
                        case 13: wheel.score+=0; break;
                        case 14: endgame('prise'); break;
                        case 15: wheel.score+=500; break;
                    }
                    $('.score').text(wheel.score)
                },
                easing : 'swing',
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                }
            })
            setTimeout(function() {
                opt.time = true
            }, 2000)
            setTimeout(function() {
                timer()
            }, 5000)
        }
    })

    let endgame = function (fin){
        switch (fin){
            case 'win': alert(`Вы выиграли!`); break;
            case 'prise': alert(`Сектор приз на барабане!`); break; 
            case 'lose': alert(`Вы проиграли!`); break;  
        }
        opt.gameOver = true
        opt.time = false
        $('.score').text('0')
        $('.timer').text('0')
    }

    for (var i = 0; i < lettersAm; i++){
        let li = document.createElement('li');
        $('ul').append(li)
        $('li').addClass('itemLetter')
    }
})