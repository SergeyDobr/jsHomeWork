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

function addOneForAll() {

   const result = arr.map(function (item, index, array) {
      return ++item;
   });
   console.log(result);
};
addOneForAll(arr);


console.log("=====Задание 6=======");

// Пересмотрел несколько раз урок, но не получилось сделать через "Rest parameters"
const val = getSum(1, 2, 3, 4);
function getSum() {
   let result = 0;
   for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
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

const arrayTestingArgs = [0, false, null, 1];

const arrayTesting = arrayTestingArgs.map(function (item, index, array) {
   if (!!item == true) {
      console.log("Нашли true значение (потому что есть хотябы одно true значение " + item);
   } else {
      console.log("Ничего нет")
   }
});
