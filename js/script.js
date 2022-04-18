//  1 задача
var act = '';

for (;;){
    act = prompt('What to do?');
    if (act == '+'||act == '-'||act == '/'||act == '*' ) break;
}
console.log(act);

//  2 задача
var am = 0;

for (;;){
    am = prompt('How many numbers?') - 1;
    if (am > 1) break;
}
console.log(am);

// 3 задача
var result = 0;

for (;;){
    result = +prompt('First number?');
    if (typeof(result) == 'number') break;
}
console.log(am);

for (var i = 0; i < am; i++){
    var keep = +prompt('Next number?');
    if (!keep) {
        alert('Error');
        break;
    }
    switch (act){
        case '+': result = result + keep;
            break;
        case '-': result = result - keep;
            break;
        case '/': result = result / keep;
            break;
        case '*': result = result * keep;
    }
}

// 4 задача
alert(result);
