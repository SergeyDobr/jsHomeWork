let arrOne = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let strOne = arrOne.join(" | ");
console.log(strOne);

console.log("=====Задание 2=======");

let strTwo = "Вася;Петя;Вова;Олег";
let arrTwo = strTwo.split(";");
console.log(arrTwo);

console.log("=====Задание 3=======");

function hello2(nameUser = "гость") {
   console.log("Привет, " + nameUser);
}
hello2("Василий");


console.log("=====Задание 4=======");

const fruits = ['яблоко', 'ананас', 'груша'];
let newStr = fruits.join(",");
newStr = newStr.toUpperCase();
const fruitsInUpperCase = newStr.split(',');
console.log(fruitsInUpperCase);


console.log("=====Задание 5=======");

const arr = [
   1,
   2,
   3,
   4,
];

function addOneForAll(...rest) {
   const result = arr.map(function (item, index, array) {
      return ++item;
   });
   console.log(result);
}
addOneForAll(arr);


console.log("=====Задание 6=======");

const val = getSum(1, 2, 3, 4);
function getSum(...rest) {
   let result = 0;
   for (let i = 0; i < rest.length; i++) {
      result += rest[i];
   }
   return result;
}
console.log(getSum(val));


console.log("=====Задание 7=======");


const arrSeven = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const arrSevenFilter = arrSeven.filter(function (item, index, array) {
   return typeof item == "number";
});
console.log(arrSevenFilter);

console.log("=====Задание 8=======");

function arrayTesting(value) {
   let result55 = value.some(function (item) {
      if (!!item == true) {
         return item
      } else {
         return false
      }
   });
   if (result55 == true) {
      console.log("Нашли true значение ")
   } else {
      console.log("Ничего нет")
   }
}
const haveTrueValue = arrayTesting([1, false, null, 0]);
