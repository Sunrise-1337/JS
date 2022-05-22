// Задача 1
var task1 = function(){
    var zz = document.querySelectorAll('.zzz');

    zz.forEach(function (elem, i){
        elem.textContent = '' + i;
    })
}

// Задача 2
var task2 = function(){
    var ww = document.querySelectorAll('body > *');
    console.log(ww)
    
    ww.forEach(function (elem){
        if (elem.textContent.includes('www')){
            elem.style.color = 'blue';
        };
    })
}

// Задача 3
var task3 = function(){
    var ul = document.createElement('ul'),
        zz = document.querySelectorAll('.zzz');
    
    document.querySelector('body').append(ul)

    zz.forEach(function (elem){
        var li = document.createElement('li');
        ul.append(li);
        li.innerText = elem.innerText;
    })
}