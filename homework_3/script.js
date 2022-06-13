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
const arrThreeNew = [].concat(arrThree[0], arrThree[1]);
let summThree = 0;
arrThreeNew.some(function (item) {
   if (typeof item == "number" && item % 2 == 0) {
      summThree += item;
   }
}); console.log(summThree);

divider()
console.log("Задание 4")

const addProrertyToObj = (key, value, object) => ({
   ...object,
   [key]: value
});
const person = {
   name: "Sergey",
   username: "Ivan",
};
const final = addProrertyToObj("dogs", 2, person)

console.log(final, person)

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
for (let i = 4; i > 0; i--) {
   console.log(i)
   resolt *= i;
} console.log(resolt)

divider()
console.log("Задание 7")


const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const sheetsFor8Weeks = consumptionPerWeek * weeksAmount;

const boxSheetsFor8Weeks = sheetsFor8Weeks / sheetsInReamPaper;
console.log(boxSheetsFor8Weeks)