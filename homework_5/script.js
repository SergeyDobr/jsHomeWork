console.log("===================Задание 1==========");

Array.prototype.getUnique = function () {
   let arr = [];
   for (let i of this) {
      if (!arr.includes(i)) {
         arr.push(i);
      };
   }
   return arr;
}

const arr1 = [1, 1, 2, 4, 458, 2, 3, 3];
const newArr = arr1.getUnique();
console.log(newArr);






let arr = [1, 1, 2, 2, 3];

function getUnique(arr) {
   let result = [];

   for (let item of arr) {
      if (!result.includes(item)) {
         result.push(item);
      }
   }

   return result;
}

console.log(getUnique(arr))

console.log("===================Задание 2==========");

Object.prototype.getKeySum = function () {
   let valuesArr = Object.values(this);
   let sum = 0;
   for (let i of valuesArr) {
      if (i !== false) {
         sum += i;
      }
   };
   console.log(sum);
};

function reverseKey(obj) {
   const ex_2 = {};

   Object.keys(obj).forEach(function (value) {
      let key = obj[value];
      ex_2[key] = value;
   });
   return ex_2;
};


const obj = { a: 1, b: 2, c: 3, d: false, e: 0 };;
obj.getKeySum();
const final_2 = reverseKey(obj);
console.log(final_2);


console.log("===================Задание 3==========");

const element = document.querySelector('.holder');
const newElementOne = document.createElement("div");
newElementOne.classList.add('item');
newElementOne.innerHTML = "1";
newElementOne.style.cssText = `
   background-color: #fd644d;
   width: 50%;
   order: 1;`
element.append(newElementOne);

const newElementTwo = document.createElement("div");
newElementTwo.innerHTML = "2";
newElementTwo.classList.add('item');
newElementTwo.style.cssText = `
   background-color: #4983b2;
   width: 33%;
   order: 4;`
element.append(newElementTwo);

const newElementThree = document.createElement("div");
newElementThree.innerHTML = "3";
newElementThree.classList.add('item');
newElementThree.style.cssText = `
   background-color: #663797;
   width: 33%;
   order: 3;`
element.append(newElementThree);

const newElementFore = document.createElement("div");
newElementFore.innerHTML = "4";
newElementFore.classList.add('item');
newElementFore.style.cssText = `
   background-color: #0e7f12;
   width: 34%;
   order: 5;`
element.append(newElementFore);

const newElementFive = document.createElement("div");
newElementFive.innerHTML = "5";
newElementFive.classList.add('item');
newElementFive.style.cssText = `
   background-color: #fda429;
   width: 50%;
   order: 2;`
element.append(newElementFive);