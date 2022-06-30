const generate = function () {
    // Спавним страницу

    let user = document.createElement("input"),
        userBtn = document.createElement("button"),
        task = document.createElement("input"),
        taskBtn = document.createElement("button"),
        userWrap = document.createElement("div"),
        taskWrap = document.createElement("div"),
        ul = document.createElement("ul"),
        value2 = '',
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
        
    user.setAttribute("type", "text"),
    user.setAttribute("placeholder", "Your name"),
    task.setAttribute("type", "text"),
    task.setAttribute("placeholder", "New task");;
    
    user.className = "user",
    task.className = "task",
    userBtn.className = "userBtn",
    taskBtn.className = "taskBtn",
    userWrap.className = "userWrap";
    taskWrap.className = "taskWrap";
    
    userBtn.innerText = "Search",
    taskBtn.innerText = "Add";
    
    document.body.append(userWrap);
    userWrap.append(user);
    userWrap.append(userBtn);
    
    let btnUser = document.querySelector(".userBtn");
    
    // По клику начинаем поиск
    btnUser.addEventListener("click", () => {
        let value = document.querySelector(".user").value,
            arr = [];
    
        // Проверка на верность данных
        if (value.length > 2) {
            document.body.append(taskWrap);
            taskWrap.append(task);
            taskWrap.append(taskBtn);
            document.body.append(ul);

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