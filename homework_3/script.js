function divider() {
   console.log("=========================================")
}
console.log("Задание 1")
const userNumder = prompt("Введите число");
function calcularUserNumber(userNumder) {
   let sum = 0;
   for (let i = 0; i <= userNumder; i++) {
      sum += i ** 2;
   } console.log(sum);
}
calcularUserNumber(userNumder)

divider()
console.log("Задание 2")
divider()
let arrOne = [3, 5, 12, 9, 23, 93, 17];
let sumTwo = 0;
for (let item of arrOne) {
   if (item > 2 && item < 20) {
      sumTwo += item;
   }
} console.log(sumTwo);

divider()
console.log("Задание 3")

const arrThree = [[1, 6, 3, '6'], [10, 15, 13, '10']];
const arrThreeNew = arrThree.flat();
let summThree = 0;
arrThreeNew.some(function (item) {
   if (typeof item == "number" && item % 2 == 0) {
      summThree += item;
   }
}); console.log(summThree);
console.log(arrThreeNew)
divider()
console.log("Задание 4")

let ourObj = {
   name: "Sergey",
   age: 23,
}
let userKey = prompt("Введите ключ:");
let userValue = prompt("Введитe значение:");
function ourProperty(key, value, object) {
   if (object[key] === undefined) {
      object[key] = value;
   } else {
      console.log("нужно использовать другой ключ")
   }
}
ourProperty(userKey, userValue, ourObj);
console.log(ourObj);
divider()
console.log("Задание 5")
for (i = 1; i <= 10; i++) {
   if (i % 3 == 0) {
      console.log("FizBuz");
   } else if (i % 2 == 0) {
      console.log("Fiz");
   } else {
      console.log("Buz")
   }
}
divider()
console.log("Задание 6")

let resolt = 1;
for (let i = 10; i > 0; i--) {
   resolt *= i;
} console.log(resolt)

divider()
console.log("Задание 7")

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const sheetsFor8Weeks = consumptionPerWeek * weeksAmount;

const boxSheetsFor8WeeksAbout = sheetsFor8Weeks / sheetsInReamPaper;
let boxSheetsFor8WeeksFinal = 0;
function isInteger(num) {
   return (num ^ 0) === num;
}

if (isInteger(boxSheetsFor8WeeksAbout)) {
   console.log(boxSheetsFor8WeeksAbout)
} else {
   do {
      boxSheetsFor8WeeksFinal++;
   } while (boxSheetsFor8WeeksFinal <= boxSheetsFor8WeeksAbout);
   console.log(boxSheetsFor8WeeksFinal)
}
