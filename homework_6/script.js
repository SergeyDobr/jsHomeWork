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
const arr = [1, 2, 3, 0, 4, 5, 6];
let finall = 0;
let resalt = arr.reduceRight(function (sum, elem) {
   if (elem == 0) {
      finall = sum;
   } else {
      return sum + elem;
   }
});
if (finall == undefined) { finall = resalt };
console.log(finall);


console.log("===========================");
console.log("Задание 3");
let num = 1;
let result = arr.reduce(function (sum, elem) {
   if (sum > 10) {
      console.log(num);
      return;
   } else {
      num++;
      return sum + elem;
   }
});

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