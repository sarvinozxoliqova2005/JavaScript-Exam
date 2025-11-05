let cartCards = document.querySelector (".cart-cards");

let cart = JSON.parse (localStorage.getItem ("carts") || "[]");
let badge = document.getElementById ("badge");
localStorage.setItem ("carts" , JSON.stringify(cart))
badge.textContent = cart.length;

