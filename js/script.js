const creElem = function (tag, className, apend, text = null, type = null, value = null, type2 = null, value2 = null) {
        let elem = document.createElement(tag)
        
        elem.innerText = text
        elem.className = className
        if (type && value) {
            elem.setAttribute(type, value)

            if (type2 && value2) {
                elem.setAttribute(type2, value2)
            }
        }
        apend.append(elem)
    },

    generate = function () {
    // Спавним страницу

    let value2 = '',
        createLi = function(value, arr, elem, choose, doneCheck) {
            let li = document.createElement('li'),
                p = document.createElement('p'),
                ul = document.querySelector('ul');

            p.innerText = choose ? elem : elem.name;
            
            let num = arr.findIndex(function (item){
                return item.name == p.innerText
            })

            ul.append(li)
            li.append(p)

            if(!doneCheck){     
                let a = document.createElement('a');       
                a.innerText = 'Done'
                a.setAttribute('href', '#')
                a.addEventListener('click', (e) => {
                    e.preventDefault()
                    p.style.textDecoration = 'line-through'
                    a.remove()
                    arr[num].done = true
                    localStorage.setItem(value, JSON.stringify(arr))
                })
                li.append(a)
            } else {
                p.style.textDecoration = 'line-through'
            }
        };


        
    creElem('div', 'userWrap', document.body)
    let userWrap = document.querySelector('.userWrap')
    creElem('input', 'user', userWrap, null, 'type', 'text', 'placeholder', 'Your name')
    creElem('button', 'userBtn', userWrap, 'Search')
    
    let btnUser = document.querySelector(".userBtn");
    
    // По клику начинаем поиск
    btnUser.addEventListener("click", () => {
        let value = document.querySelector(".user").value,
            arr = [];
    
        // Проверка на верность данных
        if (value.length > 2) {
            creElem('div', 'taskWrap', document.body)
            let taskWrap = document.querySelector('.taskWrap')
            creElem('input', 'task', taskWrap, null, 'type', 'text', 'placeholder', 'New task')
            creElem('button', 'taskBtn', taskWrap, 'Add')
            creElem('ul', null, document.body)

            let btnDo = document.querySelector('.taskBtn');

            btnDo.addEventListener('click', () => {
                value2 = document.querySelector(".task").value
                arr.push({name: value2, done: false})
                localStorage.setItem(value, JSON.stringify(arr))
                createLi(value, arr, value2, true)
            })

            if (typeof(localStorage.getItem(value)) != 'string') {
                localStorage.setItem(value, "")
            } else {
                arr = JSON.parse(localStorage.getItem(value))
                arr.forEach( (elem) => {
                    createLi(value, arr, elem, '', elem.done)
                });
            }
        } else {
            alert('Your name is too short')
        }
    })
}

generate()