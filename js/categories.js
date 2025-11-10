

let categoryCards = document.getElementById("categories-cards")
let like = JSON.parse(localStorage.getItem("likes") || "[]");
let cart = JSON.parse(localStorage.getItem("carts") || "[]");

function showCategories(content, data) {
  data.map((el) => {
    content.innerHTML += `
    <div class= "mt-[150px] group col-span2 h-[300px] ">
    <a href="../pages/category.html?categoryName=${el.name}"class="dis-card  relative bg-white shadow-lg  rounded-[5px] w-full ">
            <img class="  w-full h-full top-0 object-cover" src=${el.imageUrl} alt="" />
            <h1 class="absolute bottom-[20px] left-[20px] text-[24px] font-bold text-white pl-[10px]">${el.name}</h1> 
        </a>
    </div>
`;
  });
}

showCategories(categoryCards, categoriesData);


// let toggle = document.getElementById ("toggle");
// let toggleCategories = document.getElementById ("toggle-category");



categoriesData.map((el) => {
    toggleCategories.innerHTML += `
        <a href="../pages/category.html?categoryName=${el.name} " class="flex items-center gap-[5px]">
                <img class="w-[50px] h-[50px] rounded-[50%]" src="${el.imageUrl}" alt="">
                <h1 class="text-[24p] font-bold text-[white]">${el.name}</h1>
            </a>
    `
})

toggle.addEventListener("click" , function(){
    toggleCategories.classList.toggle("translate-y-[100px]")
})