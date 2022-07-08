const game = document.querySelector('.game')

const spanX = document.querySelector('.spanX');
spanX.classList.add('blue')

for (let i = 0; i < 9; i++) {
   game.innerHTML += ('<div class="block"></div>')
}

let pole = 0;
game.addEventListener('click', function (event) {
   if (event.target.innerHTML == "") {
      if (pole % 2 == 0) {
         event.target.innerHTML = "X";
         event.target.classList.add('blue')
      } else {
         event.target.innerHTML = "0";
         event.target.classList.add('green')
      } pole++;
   }
   winnerCheck()
})
let blocks = document.getElementsByClassName('block');
let result = document.querySelector('.result');
function winnerCheck() {
   if (blocks[0].innerHTML == "X" && blocks[3].innerHTML == "X" && blocks[6].innerHTML == "X") result.innerHTML = 'Winner is X';
   if (blocks[1].innerHTML == "X" && blocks[4].innerHTML == "X" && blocks[7].innerHTML == "X") result.innerHTML = 'Winner is X'
   if (blocks[2].innerHTML == "X" && blocks[5].innerHTML == "X" && blocks[8].innerHTML == "X") result.innerHTML = 'Winner is X'
   if (blocks[0].innerHTML == "X" && blocks[1].innerHTML == "X" && blocks[2].innerHTML == "X") result.innerHTML = 'Winner is X'
   if (blocks[3].innerHTML == "X" && blocks[4].innerHTML == "X" && blocks[5].innerHTML == "X") result.innerHTML = 'Winner is X'
   if (blocks[6].innerHTML == "X" && blocks[7].innerHTML == "X" && blocks[8].innerHTML == "X") result.innerHTML = 'Winner is X'
   if (blocks[0].innerHTML == "X" && blocks[4].innerHTML == "X" && blocks[8].innerHTML == "X") result.innerHTML = 'Winner is X'
   if (blocks[2].innerHTML == "X" && blocks[4].innerHTML == "X" && blocks[6].innerHTML == "X") result.innerHTML = 'Winner is X'

   if (blocks[0].innerHTML == "0" && blocks[3].innerHTML == "0" && blocks[6].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[1].innerHTML == "0" && blocks[4].innerHTML == "0" && blocks[7].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[2].innerHTML == "0" && blocks[5].innerHTML == "0" && blocks[8].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[0].innerHTML == "0" && blocks[1].innerHTML == "0" && blocks[2].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[3].innerHTML == "0" && blocks[4].innerHTML == "0" && blocks[5].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[6].innerHTML == "0" && blocks[7].innerHTML == "0" && blocks[8].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[0].innerHTML == "0" && blocks[4].innerHTML == "0" && blocks[8].innerHTML == "0") result.innerHTML = 'Winner is 0'
   if (blocks[2].innerHTML == "0" && blocks[4].innerHTML == "0" && blocks[6].innerHTML == "0") result.innerHTML = 'Winner is 0'
}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
   location.reload();
})