// Задача 1

function task1(){
    var str = 'ahb acb aeb aeeb adcb axeb',
        reg = /a.b/g;

    console.log(str.match(reg))
}

// Задача 2

function task2(){
    var str = '*+ *q+ *qq+ *qqq+ *qqq qqq+',
        reg = /\*q+\+/g;

    console.log(str.match(reg))
}

// Задача 3

    var str = '2012/09/18 12:10, 2013/09/09 09:09, 2005/09/09 09:09, 2016/09/09 09:09, 1099/09/09 09:09, 2002/09/09 09:09',
        reg = /(1[0-9][0-9][0-9]|20[0][0-9]|20[1][0-2])\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\s\d{2}\:\d{2}/g;

    console.log(str.match(reg))

// Задача 4

function task4(){
    var str = 'Extra   spaces.   Sentence.   Sentence.',
        reg = /\s+/g,
        reg2 = /\.\s/g;

    console.log(str.replace(reg, ' ').replace(reg2, '.  '))
}