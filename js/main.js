
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
   


                      <img class=" w-full object-cover  h-[240px] mx-auto" src="${el.images [0]}" alt=""/>
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
                </div>      `
                        }
                              
                </div>`
});

}

showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);







// let loading = document.getElementById("loading")
// window.addEventListener ("load" , function() {
//     loading.classList.add ("hidden")
// })




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