let path = new URLSearchParams(location.search);
let id = path.get ("id");
let singlePge = document.getElementById ("single-page");
let singleProducts = document.getElementById ("single-products")
let item = products.filter ((el) => el.id == id);

item.map((el) => {
    singlePge.innerHTML += `
        <div id="single-cards">
          <div class="flex max-[1326px]:flex-col gap-[15px]">
          <div class="flex gap-[15px] ">
            <div id= "change-images" class="flex flex-col gap-[5px] ">
              <img class="max-w-[126px] h-[126px] object-cover" src="${el.images[0]}" alt="">
              <img class="max-w-[126px] h-[126px] object-cover"  src="${el.images[1]}" alt="">
              <img class="max-w-[126px] h-[126px] object-cover"  src="${el.images[2]}" alt="">
              <img class="max-w-[126px] h-[126px] object-cover"  src="${el.images[3]}" alt="">
            </div>
            <div>
              <img id= "main-image" class="max-w-[506px] w-full  min-h-[510px] object-cover"  src=${el.images[0]} alt="">
            </div>
            <div class= "top-2 text-white  relative flex items-center justify-center  left-[-90px] max-w-[65px] w-full  h-[45px] rounded-[5px] px-3 pt-2">
            <h1 class= "bg-[#FF6633] absolute text-[30px] w-full h-full">${el.discount}%</h1>
            </div>
         </div>
         </div>


             
        
            <div class= "flex justify-between items-center">
             <h1 class= "text-[36px] font-400 text-[#606060]">${el.price}₽</h1>
             <h1 class= "font-bold text-[43px] ">${el.discount}₽</h1>
             </div>
            <div class="flex justify-between items-center gap-[300px]">
            <h1 class= "text-[#BFBFBF] text-[12px]">Обычная цена</h1>
            <h2 class= "text-[#BFBFBF] text-[12px]">С картой Северяночки</h2>
        </div>
        </div>


          <div class="flex items-center mx-auto justify-center mt-[30px]  gap-[30px] max-w-[279px] w-full h-[60px] border-[2px] border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-white transition-transform duration-500 hover:scale-105">
             <img class= "w-[32px] h-[32px]  " src="https://cdn-icons-png.flaticon.com/512/481/481384.png" alt="basket" class= "w-full w-5 h-5 md:w-6 md:h-6">
             <button
             class= "text-[24px] font-[400] cursor-pointer  ">В корзину</button>
          </div>
          
          <div class="flex items-center  gap-[200px] mt-[40px] w-[584px] max-w-full h-[26px] p-[4px] bg-[#F3F2F1]">
            <h1 class= "text-[#565656] ">Бренд</h1>
            <h2 class= "text-[#414141] font-bold">ПРОСТОКВАШИНО</h2>
          </div>

          <div class="flex items-center gap-[70px] mt-[20px]  w-[584px] max-w-full h-[26px] p-[4px]">
            <h1>Страна производителя</h1>
            <h2>Россия</h2>
          </div>

          <div class="flex items-center gap-[175px] mt-[20px] w-[584px] max-w-full h-[26px] p-[4px] bg-[#F3F2F1]">
            <h1>Упаковка</h1>
            <h2>180 г</h2>
         </div>

         </div>

       `
})


let mainImage = document.getElementById ("main-image");
let changeImages = document.getElementById ("change-images");
changeImages.addEventListener ("click" , (e) => {
   mainImage.src = e.target.src
})



let cardlar = document.querySelector (".cardlar");

let cart = JSON.parse (localStorage.getItem ("carts") || "[]");
let badge = document.getElementById ("badge");
localStorage.setItem ("carts" , JSON.stringify(cart))
badge.textContent = cart.length;


let likeBadge = document.getElementById ("like-badge");
let like = JSON.parse (localStorage.getItem ("likes") || "[]");
localStorage.setItem ("likes" , JSON.stringify(like));
likeBadge.textContent = like.length;

let sliceProducts = products.slice (products.length - 4 , products.length);


let NewProducts = document.querySelector (".NewProducts");
let NewsliceProduct = products.slice(products.length-4 , products.length);


let newpromise = document.querySelector (".RecentlyPurchasedProducts");
let NewsliceProducts = products.slice(products.length-4 , products.length);


let aksiyaProduct = products.filter ((el) => el.discount > 0);
let proCard = aksiyaProduct.slice (aksiyaProduct.length - 4, aksiyaProduct.length);



function showProducts (content , data) {
   content.innerHTML = "";
data.map ((el) => {
   content.innerHTML += `
   <div class="ProductAksiya  relative w-[100%] max-[600px]:max-w-[350px]  h-[475px]  mt-[20px]  mb-3 rounded-[4px] bg-[white]  transition-transform duration-500 hover:scale-105 shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75]">
   ${
      like.find((item) => item.id === el.id) ?  `
      <img 
            onClick = "removeToLike (${el.id})"
          class= " bg-[red]  w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[15px] right-[15px]" src = "../assets/images/likes/like-minus.png" alt = " " />` : `
      <img 
            onClick = "addToLike (${el.id})"
          class= "w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[15px] right-[15px]" src = "../assets/images/likes/like-plus.png" alt = " " />`
   }
   


                     <a href = "../pages/vseproduct.html?id=${el.id}">
                      <img class=" w-full object-cover  h-[240px] mx-auto" src="${el.images [0]}" alt=""
                      />
                     </a>
                     <p class=" relative bottom-10 ml-[15px]  max-w-[70px] h-[36px] rounded-[10px] bg-[#FF6633] text-white flex items-center justify-center transition-transform duration-500 hover:scale-110">-${el.discount}%</p>
                    <div class="flex items-center justify-between px-3 mt-[-20px]" href="">
                       <h1 class="text-[20px] font-bold">${el.price}₽</h1>
                       <h1 class="text-[20px] font-bold">${el.discount}₽</h1>
                    </div>
                    <div>
                        <p class=" font-bold  text-[pink] px-3">${el.name}</p>
                        <p class = "px-3 mt-[5px] ml-[5px]">${el.description}</p>
                        </div>

                       
                        ${
                           cart.find((items) =>items.id === el.id)
                           
                           ? `
                            <div class= "w-full  grid grid-cols-3 w-full px-3 pt-2 absolute left-0 bottom-2 ">
                        <button
                          onClick = "decrease (${el.id})"
                        class= "bg-[red] p-[15px]  rounded-[5px] flex items-center justify-center text-white  text-[20px] font-bold  ">-</button>
                        <span class= " flex p-[15px] items-center justify-center text-[black]  text-[20px] font-bold  ">${cart.find((item) => item.id === el.id).numbers}</span>
                        <button
                          onClick = "increase (${el.id})"
                        class= "bg-[green] p-[15px] flex items-center rounded-[5px] justify-center text-white  text-[20px] font-bold  ">+</button>
                        </div` :  `
                         <div class="w-full px-3 pt-2 absolute left-0 bottom-2 ">
                      <button 
                     onClick  = "addToCart (${el.id})"
                    class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">
                    В корзину</button> 
                </div>      
                `
                        }
                              
                </div>`
});

}

showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);



function addToCart (id) {
   let item = products.find((el) =>el.id === id);
   item.numbers = 1;
   cart.push (item);
   badge.textContent = cart.length;
   localStorage.setItem ("carts" , JSON.stringify(cart)) ;
   showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);
}



function increase (id) {
   cart = cart.map ((item) => {
      if (item.id === id){
         item.numbers += 1
      }
      return item;
   } );
   localStorage.setItem ("carts" , JSON.stringify(cart)) ;
   showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);
}



function decrease (id) {
   let item = cart.find((el) => el.id === id);
   cart = cart.map ((item) => {
      if (item.id === id){
         item.numbers -= 1
      }
      return item;
   } );


   if (item.numbers === 0) {
      cart = cart.filter((el) => el.id !== id) ;

   }

   localStorage.setItem ("carts" , JSON.stringify(cart)) ;
   showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct)
showProducts (newpromise , NewsliceProducts)
}



function addToLike (id) {
   let likeItem = products.find((el) => el.id === id);
   like.push(likeItem);
   likeBadge.textContent = like.length;
   localStorage.setItem ("likes" , JSON.stringify(like));
   showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);
}


function removeToLike (id) {
   like = like.filter((el) => el.id !== id);
   likeBadge.textContent = like.length;
   localStorage.setItem ("likes" , JSON.stringify(like));
   showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);
}

