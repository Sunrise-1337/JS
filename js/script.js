var userName = prompt('What is your name?');
alert('Hello, ' + userName + '! How are you?');// Задача 1

// var array = [2, 3, 4, 5, 6, 7],
//     l = array.length,
//     result = 0;

// function toSum(arr, arrL){
//     arrL = arrL - 1;
//     if (arrL >= 0) {
//         result = arr[arrL] + toSum(arr, arrL)
//     }
//     return result
// }

// toSum(array, l)

// console.log(result)

// Задача 2

// var calc = 0;

// function retSum(start, finish, step){
//     if (start < 0 || finish < 0 || step <= 0){
//         return 0
//     }

//     calc += start;

//     if ((start + step) <= finish) {
//         start = (start + step) + retSum(start+step, finish, step)
//     }
// }

// retSum(0, 10, 3)

// console.log(calc)