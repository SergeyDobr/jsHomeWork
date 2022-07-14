let list = document.querySelector('.list');
list.style.listStyle = "none";
let idProduct = 0;

async function giveRespons() {
   let response = await fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6');
   let content = await response.json()

   let item = 0;

   for (item of content) {
      // console.log(item)
      list.innerHTML += `<li style="display: flex; margin-bottom: 30px; " ><img onclick="localStorage.setItem('idProduct', '${item.id}')" style = "max-width: 150px;" src="${item.image_url}" alt=""> <p style="font-size: 20px; max-width: 1000px;" >${item.description}</p></li>`
   }
}
giveRespons()