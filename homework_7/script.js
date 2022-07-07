// Задание 1

const newToDo = document.querySelector("#newToDo");
const addToDo = document.querySelector("#AddToDo");
let toDoList = document.querySelector("#toDoList");
const DoneCheckbox = document.querySelector(".DoneCheckbox");



addToDo.addEventListener('click', (e) => {
   if (newToDo.value === "") return
   createAndDeleteElem(newToDo.value);
   newToDo.value = "";
})

function createAndDeleteElem(value) {
   const li = document.createElement('li');
   li.className = "listItem";
   toDoList.appendChild(li);
   li.textContent = value;

   const btn = document.createElement('button');
   btn.setAttribute('id', 'removeButton')
   btn.textContent = "Remove";
   li.appendChild(btn);
   btn.style.marginLeft = "30px"
   btn.addEventListener('click', (e) => {
      toDoList.removeChild(li)
   })

   const inputCheck = document.createElement('input');
   inputCheck.setAttribute('type', 'checkbox');
   li.prepend(inputCheck);

   inputCheck.addEventListener('click', (e) => {
      li.classList.toggle('done')
   })
}


// Задание 2


// 1.цикл

// const n = 8;
// let summ = 0;

// for (i = 0; i <= n; i++) {
//    summ += i
// }
// console.log(summ)

// 2. рекурсия

// function summRecursion(n) {
//    if (n == 1) {
//       return 1;
//    } else {
//       return n + summRecursion(n - 1)
//    }
// }
// console.log(summRecursion(8))

// Задание 3


// function printNumbers(from, to) {
//    let number = from;
//    let timer = setInterval(function () {
//       console.log(number);
//       if (number == to) {
//          clearInterval(timer)
//       }
//       ++number
//    }, 1000)
// }
// printNumbers(2, 5)


// function printNumbers(from, to) {
//    let number = from;
//    let timer = setTimeout(function rec() {
//       console.log(number);
//       timer = setTimeout(rec, 500)
//       number++
//       if (number == to) {
//          clearTimeout(timer);
//       };
//    }, 500)
// }
// printNumbers(2, 5)


// Задание 4

// let start = 0;
// let startwo = setInterval(function () {
//    start++
//    console.log(`Прошло ${start} секунд`);
//    if (start === 5) {
//       clearInterval(startwo)
//    }
// }, 1000);



