let allChecked = document.getElementById ("checked-all")

let cartCards = document.querySelector (".cart-cards");
let allPrice = document.getElementById ("all-price");
let allDiscount = document.getElementById ("all-discount");
let allPaid = document.getElementById ("all-paid");
let sumPrice = 0;
let discountPrice = 0;
let paidPrice = 0;
allPrice.textContent = sumPrice;
allDiscount.textContent = discountPrice;
allPaid.textContent = paidPrice


let cart = JSON.parse (localStorage.getItem ("carts") || "[]");
let badge = document.getElementById ("badge");
localStorage.setItem ("carts" , JSON.stringify(cart))
badge.textContent = cart.length;

 function showCartProducts (content , data) {
    content.innerHTML = "";
    allPrice.textContent = sumPrice;
    allDiscount.textContent = discountPrice;
    allPaid.textContent = paidPrice;
    data.map ((el) => {
        content.innerHTML += `
         <div
                class="bg-white w-full rounded-lg p-2 gap-3 max-[700px]:gap-5 shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75] mb-2 flex justify-between max-[700px]:flex-col px-5 items-center max-w-[876px] transition-transform duration-500 hover:scale-105"
              >
                <div class="flex gap-5 items-center w-full">
                  <div class="relative">
                    <img
                      class="rounded-lg object-cover w-[80px] h-[60px]"
                      src="${el.images[0]}"
                      alt=""
                    />

                    <input
                    onClick = "checkedInput(this, ${el.id})"
                      class="absolute top-[-8px] left-[-2px] w-[25px] h-[25px] cursor-pointer border border-gray-400 rounded"
                      type="checkbox"
                    />
                  </div>

                  <div class="flex-1">
                  <h2 class="font-semibold sm:text-sm md:text-md lg:text-lg text-[pink] font-bold">
                      ${el.name}
                    </h2>
                    <h2 class="font-semibold sm:text-sm md:text-md lg:text-lg">
                      ${el.description}
                    </h2>
                                      <a class="flex items-center gap-[20px]" href="">
                    <p class="font-bold text-sm">${el.price} ₽</p>
                    <p class=" font-bold">${el.discount} ₽</p>
                  </a>
                  </div>
                </div>

                
                <div
                  class="flex max-[700px]:w-full gap-5 items-center min-[900px]:flex-row min-[700px]:flex-col max-[700px]:justify-between"
                >
                  <div class="cursor-pointer w-[200px] flex gap-[5px]">
                    <button
                    onClick = "decrease (${el.id})"
                      class="minus bg-green-600 text-white px-2 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span class="qty font-medium">${el.numbers}</span>
                    <button
                    onClick = "increase (${el.id})"
                      class="plus bg-green-600 text-white px-2 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <p
                    class="font-semibold sm:text-sm w-[60px] lg:text-md text-gray-700 text-right"
                  >
                    ${
                    el.price * el.numbers
                    } ₽
                  </p>
                </div>
              </div>
        `
    })
}

showCartProducts (cartCards , cart) 


function increase (id) {
   cart = cart.map ((item) => {
      if (item.id === id){
         item.numbers += 1
      }
      return item;
   } );
   countPrices()
   localStorage.setItem ("carts" , JSON.stringify(cart)) ;
   showCartProducts (cartCards , cart) 
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
    countPrices()
   localStorage.setItem ("carts" , JSON.stringify(cart)) ;
   showCartProducts (cartCards , cart) 
}



function countPrices () {
    sumPrice = 0;
    discountPrice = 0;
    paidPrice = 0;


    cart.map ((el) => {
        sumPrice += el.price *el.numbers;
        discountPrice += el.price * el.discount *el.numbers /100;
        paidPrice = sumPrice - discountPrice;
        
    });
    allPrice.textContent = sumPrice;
    allDiscount.textContent = discountPrice;
    showCartProducts (cartCards , cart) 
}
countPrices()


function checkInput (obj , id) {

}

allChecked.addEventListener ("click" , function(){

})