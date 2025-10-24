
let count = 2;
function updateCount (value) {
    count += value;
    if (count < 0) count = 0;
    document.getElementById ("countDisplay"). textContent = count;

    if (count === 0) {
        console.log ("Mahsulot o'chirilsin !");
    } else {
        console.log ("Mahsulot soni :" , count);
        
    }
}



function plus (btn) {
    let qty = btn.parentElement.querySelector (".qty");
    qty.textContent = +qty.textContent + 1;
}

function minus (btn) {
    let qty = btn. parentElement.querySelector (".qty");
    if (qty.textContent > 1) qty.textContent = +qty.textContent -1;
}

