<<<<<<< Updated upstream
var userName = prompt('What is your name?');
alert('Hello, ' + userName + '! How are you?');
=======
// Задача 1

// function calc (op1, op2){
//   if (op1 == op2) {
//     alert('Числа равны');
//   }

//   if (op1 > op2) {
//     alert('Первое число больше');
//   }

//   if (op1 < op2) {
//     alert('Второе число больше');
//   }
// }

// for(;;){
//   var o1 = +prompt('Number 1?'),
//       o2 = +prompt('Number 2?');

//   console.log(calc(o1, o2))

//   if (!o1) {
//     alert('первый ввод – не число');
//     break;
//   }
//   if (!o2) {
//     alert('второй ввод – не число');
//     break;
//   }
// }

// Задача 2

// function home (floor, entr, fpf, fn){
//   var set = floor * fpf,
//       house = floor * entr * fpf * fn,
//       n = 1;

//   for (;;){    
//     if (fn <= house){
//       if (fn <= (set * n)){
//         alert('Подъезд ' + n);
//         break;
//       } else {
//         n = n + 1;

//         if (n > entr) {
//           alert('Число квартиры слишком велико');
//           break;
//         }
//       }
//     }
//   }
// }

// function check (min, max, value){
//   return((min && max && value) && (min <= value && value <= max))
// }

// for(;;){
//   var floor = +prompt('Этажность?');

//   if (!check(1, 25, floor)) {
//     alert('этажность – недопустимое значение');
//     break;
//   }

//   var entr = +prompt('Количество подъездов?');

//   if (!check(1, 10, entr)) {
//     alert('этажность – недопустимое значение');
//     break;
//   }

//   var fpf = +prompt('Квартир на этаж?');

//   if (!check(1, 20, fpf)) {
//     alert('квартир на этаж – недопустимое значение');
//     break;
//   }

//   var fn = +prompt('Номер квартиры?');
  
//   if (!check(1, 5000, fn)) {
//     alert('номер квартиры – недопустимое значение');
//     break;
//   }

//   console.log(home(floor, entr, fpf, fn))
// }

// Задача 3

// function calc2 (no1, no2){
//   if (no1%2 == 0 && no2%2 == 0) {
//     alert(no1*no2);
//   }

//   if (no1%2 != 0 && no2%2 != 0) {
//     alert(no1+no2);
//   }

//   if (no1%2 == 0 && no2%2 != 0) {
//     alert(no2);
//   } 
//   if (no1%2 != 0 && no2%2 == 0) {
//     alert(no1)
//   }
// }

// for(;;){
//   var n1 = +prompt('Number 1?');

//   if (!n1) {
//     alert('первый ввод – не число');
//     break;
//   }

//   var n2 = +prompt('Number 2?');

//   if (!n2) {
//     alert('второй ввод – не число');
//     break;
//   }

//   console.log(calc2(n1, n2))
// }

// Задача 4

// function sqCheck (x1, y1, x2, y2, x3, y3, x4, y4){
//   if (x1 == x4 && x2 == x3 && y1 == y2 && y3 == y4){
//     alert('Да это же прямоугольник!');
//   } else {
//     alert('Не прямоугольник');
//   }
// }

// for(;;){
//   var x1 = +prompt('Значение оси х верхнего левого угла?');

//   if (!x1) {
//     alert('первый х – не число');
//     break;
//   }

//   var y1 = +prompt('Значение оси y верхнего левого угла?');

//   if (!y1) {
//     alert('первый у – не число');
//     break;
//   }

//   var x2 = +prompt('Значение оси х верхнего правого угла?');

//   if (!x2) {
//     alert('второй х – не число');
//     break;
//   }

//   var y2 = +prompt('Значение оси y верхнего правого угла?');

//   if (!y2) {
//     alert('второй у – не число');
//     break;
//   }  
  
//   var x3 = +prompt('Значение оси х нижнего правого угла?');

//   if (!x3) {
//     alert('третий х – не число');
//     break;
//   }

//   var y3 = +prompt('Значение оси y нижнего правого угла?');

//   if (!y3) {
//     alert('третий у – не число');
//     break;
//   }

//   var x4 = +prompt('Значение оси х нижнего левого угла?');

//   if (!x4) {
//     alert('четвертый х – не число');
//     break;
//   }

//   var y4 = +prompt('Значение оси y нижнего левого угла?');

//   if (!y4) {
//     alert('четвертый у – не число');
//     break;
//   }

//   console.log(sqCheck(x1, y1, x2, y2, x3, y3, x4, y4))
// }

// Задача 5

// var start = +prompt('Start number?'),
//     step = +prompt('Step number?');

// function generator (s1, s2){
//     s1 = s1 + s2;
//     start = s1;
//     alert(start);
// }

// function getSequence(s1, s2) {
//   generator(s1, s2);
// }

// if (!start) {
//     alert('Start not a number, set default');
//     start = 0;
// }

// if (!step){
//     alert('Step not a number, set default');
//     step = 1;
// }

// for (;;){
//     getSequence(start, step)
// }
>>>>>>> Stashed changes
