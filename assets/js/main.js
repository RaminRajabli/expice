
//Changing the color of website

let green = document.querySelector(".green");

let change_green = document.querySelector(".color-change");


change_green.addEventListener("click",()=>{
  green.removeAttribute("disabled")

  //services
  document.getElementById("myImg").src = "./assets/images/green_services/tablegreen.png";
  document.getElementById("myImg2").src = "./assets/images/green_services/food_green.png";
  document.getElementById("myImg3").src = "./assets/images/green_services/delivery_green.png";
})




let change_red = document.querySelector(".color-change1");

change_red.addEventListener("click",()=>{
  green.setAttribute("disabled","true");

  //services
  document.getElementById("myImg").src = "./assets/images/services/table.svg"
  document.getElementById("myImg2").src = "./assets/images/services/food.svg";
  document.getElementById("myImg3").src = "./assets/images/services/deliver.svg";
})





//getting products

let products = document.querySelector(".cards");
let product_list = [];

axios.get("https://ramin-c1e9b-default-rtdb.firebaseio.com/cards.json").then(
  response => response.data
).then(data=>{
  for(let key in data){
    product_list.unshift(data[key]);
  }
}).catch(error => {throw error})



let i = 0;
setTimeout(()=>{
  for(let element of product_list){
    
    if(i<6){
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
          <a href="#">
           <figure>
                <img  src="${element.image}" alt="">
           </figure>
           <div class="content">
              <ul>
                <li>
                    <h4>
                      ${element.product}
                    </h4>
                </li>
                <li><p>
                      ${element.description} 
                </p></li>
                <li class ="price">
                    <span>$ ${element.price}</span>
                </li>
              </ul>
            </div>
      </a>`
  
      products.appendChild(card);
    }
    i++
  }
},5000)



const menu_phone_bar = document.querySelector(".navbar-menu_list--phone");
const menu_bars = document.querySelector(".menu_icon");
const line = document.querySelectorAll(".line");

menu_bars.addEventListener("click", () => {
    menu_phone_bar.classList.toggle("navbar-menu_list--phone--show");
    line.forEach((item)=>{
      item.classList.toggle("line-change");
    });
})


const element1 = document.querySelector(".button1");

element1.addEventListener('mouseover', () => {
    element1.classList.add("animate__animated", "animate__lightSpeedInLeft");
    element1.style.setProperty('--animate-duration', '0.8s');
});

element1.addEventListener('animationend',()=>{
  element1.classList.remove("animate__animated", "animate__lightSpeedInLeft");
})

const element2 = document.querySelector(".element2");
const element2_ = document.querySelector(".label");
element2.addEventListener('mouseover', () => {
    element2_.classList.add("animate__animated", "animate__pulse");
    element2_.style.setProperty('--animate-duration', '0.5s');

});

element2.addEventListener('animationend',()=>{
  element2_.classList.remove("animate__animated", "animate__pulse");
})

// const element3 = document.querySelector(".image_animation");
// const element2_ = document.querySelector(".label");
// element3.addEventListener('mouseover', () => {
//     element3_.classList.add("animate__animated", "animate__pulse");
//     element3_.style.setProperty('--animate-duration', '0.5s');

// });

// element3.addEventListener('animationend',()=>{
//   element3_.classList.remove("animate__animated", "animate__pulse");
// })