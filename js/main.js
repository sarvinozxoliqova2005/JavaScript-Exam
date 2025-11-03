
let cardlar = document.querySelector (".cardlar");
let cart = [];


let sliceProducts = products.slice (products.length - 4 , products.length);


let NewProducts = document.querySelector (".NewProducts");
let NewsliceProduct = products.slice(products.length-4 , products.length);


let newpromise = document.querySelector (".RecentlyPurchasedProducts");
let NewsliceProducts = products.slice(products.length-4 , products.length);


let aksiyaProduct = products.filter ((el) => el.discount > 1);
let proCard = aksiyaProduct.slice (aksiyaProduct.length - 4, aksiyaProduct.length);


function showProducts (content , data) {
data.map ((el) => {
   content.innerHTML += `
   <div class="ProductAksiya  relative w-[100%]  h-[445px] mt-[20px]  mb-3 rounded-[4px] bg-[white]  transition-transform duration-500 hover:scale-105 shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75]">
          <img class= "w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[gray] rounded-[5px] absolute top-[15px] right-[15px]" src = "../assets/images/likes/like-plus.png" alt = " " />
                      <img 
                      onClick = "addToLike (${el.id})"
                      class=" w-full object-cover  h-[240px] mx-auto" src="${el.images [0]}" alt="">
                     <p class=" relative bottom-10 ml-[15px]  max-w-[70px] h-[36px] rounded-[10px] bg-[#FF6633] text-white flex items-center justify-center transition-transform duration-500 hover:scale-110">-${el.discount}%</p>
                    <div class="flex items-center justify-between px-3 mt-[-20px]" href="">
                       <h1 class="text-[20px] font-bold">${el.price}₽</h1>
                       <h1 class="text-[20px] font-bold">${el.discount}₽</h1>
                    </div>
                    <div>
                        <p class=" font-bold  text-[pink] px-3">${el.name}</p>
                        <p class = "px-3 mt-[5px] ml-[5px]">${el.description}</p>
                        </div>

                        <div class="w-full px-3 pt-2 absolute left-0 bottom-2">
                      <button 
                     onClick  = "addToCart (${el.id})"
                    class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">
                    В корзину</button> 
                </div>      
                              
                </div>`
});

}

showProducts (cardlar , proCard);
showProducts (NewProducts , NewsliceProduct);
showProducts (newpromise , NewsliceProducts);



                //  Card2


// NewProducts.map ((el) => {
//     NewProducts.innerHTML += `
//       <div class="NewProducts relative w-[100%] mt-[20px]  h-[460px] rounded-[4px] bg-[white] transition-transform duration-500 hover:scale-105 shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75] w-auto">
//                     <img class="max-w-[100%] h-[250px] mx-auto" src="${el.images[0]}" alt="${el.name}">
                    
//                     <h1 class="ml-[20px] mt-[20px] text-[20px] font-[700]">${el.price}
// ₽</h1>

// <p class="text-[18px] font-bold  text-[pink] px-4">${el.name}</p>
// <p class = "px-3 mt-[5px] ml-[5px]">${el.description}</p>

//                 <div class="w-full px-3 pt-2 absolute left-0 bottom-2">
//                     <button class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">В корзину</button> 
//                 </div>
//        </div>         
// `})




                //   card3



// const RecentProDiscount = products.filter((el) => el.discount > 1);
// const RecentDiscountProducts = products.slice (RecentProDiscount.length - 4 , RecentProDiscount.length);


// RecentDiscountProducts.forEach ((el) => {
//     RecentlyPurchasedProducts.innerHTML += `
//     <div  class="RecentlyPurchasedProducts relative w-[100%] h-[420px] rounded-[4px] bg-[white] mt-[20px] transition-transform duration-500 hover:scale-105 shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75] w-auto">
//                     <img class="max-w-[100%] h-[210px] mx-auto " src="${el.images[0]}" alt="">
                    
//                     <h1 class="ml-[20px] mt-[20px] text-[20px] font-[700]">${el.price}
// ₽</h1>

// <p class="text-[18px] font-bold  text-[pink] px-4">${el.name}</p>
// <p class = "px-3 mt-[5px] ml-[5px]">${el.description}</p>
//                 <div class="w-full px-3 pt-2 absolute left-0 bottom-2">
//                     <button class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">В корзину</button> 
//                 </div>  
//                 </div>`
// })



let loading = document.getElementById("loading")
window.addEventListener ("load" , function() {
    loading.classList.add ("hidden")
})



function addToCart (id) {
    let items = products.find((el) => el.id === id);
    cart.push (items)
    console.log(cart);
    badge.textContent = cart.length;  
}



