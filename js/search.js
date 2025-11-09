
let search = document.getElementById("searchInput")
let searchCards = document.getElementById ("searchCards");

search.addEventListener("input" ,() => {
    let searchValue = search.value;
    

        let searchedProducts = products.filter ((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()));

    if(searchValue) {
        searchCards.classList.remove("hidden")
    }else {
        searchCards.classList.add ("hidden")
        searchCards.innerHTML = " ";
    }

    searchCards.innerHTML = " ";
    searchedProducts.length > 0 ?
    searchedProducts.map ((el) => {
        searchCards.innerHTML += `
        <div class="flex items-center border-[2px] border-[green] rounded-[5px] gap-[10px] p-[20px]">
                        <img class="max-w-[80px] w-full max-[600px]:max-w-[60px] max-[300px]:max-w-[40px]" src="${el.images[0]}" alt="">
                        <div class="flex flex-col justify-between  ">
                            <h1>${el.name}</h1>
                      <p>${el.description}</p>
                        </div>
                    </div>`
    }): searchCards.innerHTML = `
    <div class = "text-center" > Mahsulot topilmadi!</div>`
})