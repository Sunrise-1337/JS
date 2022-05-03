// Задача 1

// var arr =  [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40}];

// arr.sort(function (a, b){
//     return a.age - b.age;
// })

// console.log(arr)

// Задача 2

// var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

// function filterFalse(aray){
//     aray = aray.filter(function(item){
//         return item > 0 || item < -0 || (typeof item) == 'string' && item != '';
//     })
//     console.log(aray)
// }

// filterFalse(arr)

// Задача 3

// var arr = [false, 10, 100, NaN, 10, true, 10],
//     test = [];

// function find(elem, value){
//     for (var i = 0; i < elem.length; i++){
//         var item = arr[i];
//         if (item === value){
//             test.push(i)
//         }
//     }
//     console.log(test)
// }

// find(arr, 10)

// Задача 4
// var matrix = [],
//     result = [];

// function createMatrix(row, col){
//     var sum = row * col,
//         random = Math.floor(Math.random()*100),
//         space = col - 1;
    
//     for (var i = 0; i < sum; i++){
//         var random = Math.floor(Math.random()*100);
    
//         if (i%space === 0 && i !== 0) {
//             matrix.push([random]);
//             matrix[i].push('\n');
//             space = space + col;
//         } else {
//             matrix.push([random]);
//         }

//         matrix[i] = matrix[i].join('')
//     }

//     result.push(' ');

//     result = result + matrix.join(' ');

//     console.log(result)
// }

// createMatrix(20,10)

// Бонус уровень

// function flatten(arr){
//     var elem = arr.join();
//     var elem2 = [elem.split()];
//     console.log(elem2);
// }

// flatten([1, [2], [3, [4]]]);

// Или

// function flatten(arr){
//     var result = [];
//     for (var i = 0; i < arr.length; i++){
//         var elem = arr[i];
//         if(Array.isArray(elem)){
//             result = result.concat(flatten(elem))
//         } else {
//             result.push(elem)
//         }
//     }
//     return result
// }
// console.log(flatten([3, [4, [5, [6, [7]]]], [true, [false, [1, [20], 'trash']]],'test', [true]]))
