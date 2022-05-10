// Задача 1

function makePassword(){
    // получаем пароль с сервера
    var password = 'Vladislav2003';

    return function checkPassword(ans){
        return (ans == password)
    }
}

var pass1 = prompt('Password?'),
    pro = makePassword();

pro(pass1);
console.log(pro(pass1))

// Задача 2

function randomGacha(){
    var store = [];

    return function randNum(){
        var rand = Math.floor(Math.random()*100);
        if (!store.includes(rand)){
            store.push(rand);
            console.log(store)
        }
    }
}

var test = randomGacha();

for (var i = 0; i < 60; i++){
    test();    
}
