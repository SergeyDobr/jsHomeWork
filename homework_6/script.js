console.log("===========================");
console.log("Задание 1")

const p = document.querySelector("p");
const img = document.querySelector("img")

p.addEventListener('click', function () {
   img.style.display = "block";
});
img.addEventListener('mouseover', function () {
   img.style.width = "200px";
   img.style.transition = "width .4s ease"
});
img.addEventListener('click', function () {
   img.style.display = "none";
});

console.log("===========================");
console.log("Задание 2");
const arr = [1, 2, 3, 0, 4, 5, 0, 6];
arr.reverse();
let sum = 0;

for (let num of arr) {
   if (num === 0) {
      break;
   }
   sum += num;
}

console.log(sum);

console.log("===========================");
console.log("Задание 3");
const arr2 = [9, 9, 1, 1, 5, 6]

function getIteration(arr) {
   let result = 0;
   let sum = 0;
   for (let num of arr) {
      if (sum > 10) {
         return result;
      }
      sum += num;
      result++;
   }
}
console.log(getIteration(arr2))

console.log("===========================");
console.log("Задание 4");

const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener('click', function () {
   console.log(input.value);
})
console.log("===========================");
console.log("Задание 5");

const links = document.querySelectorAll("a");
function addHref() {
   this.innerHTML = this.innerHTML + " " + this.getAttribute('href');
}

links.forEach(element => {
   element.addEventListener('mouseover', addHref, { "once": true })
})
console.log("===========================");
console.log("Задание 6");

const button6 = document.querySelector('.ex6');
button6.addEventListener('click', function () {
   button6.style.display = "none"
})

console.log("===========================");
console.log("Задание 8");

function logDataAttr(event) {
   const btnKeys = Object.keys(event.target.dataset);
   const btnValues = Object.values(event.target.dataset);
   let btnLength = btnKeys.length;
   if (btnKeys.length < 1) {
      console.log("У этого элемента 0 дата аттрибутов")
   } else {
      console.log(`У этого элемента ${btnLength} дата аттрибутов`)
      for (i = 0; i < btnKeys.length; i++) {
         console.log(`Aттрибут ${btnKeys[i]} - ${btnValues[i]}`)
      }
   }
}