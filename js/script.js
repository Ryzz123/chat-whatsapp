const whatsapp = document.querySelector(".pesan-suara");
const profil = document.querySelector("#menu");
const menu2 = document.querySelector("#menu-2");
const menu = document.querySelector(".menu-kedua");
const menuUtama = document.querySelector(".menu-utama");
const menuUtama3 = document.querySelector(".antarmuka-container");

whatsapp.addEventListener("click", function() {
    document.location.href = "https://wa.me/6281906412862";
})

profil.addEventListener("click", function() {   
    menu.classList.toggle("display");
    menuUtama.classList.toggle("display");
})

menu2.addEventListener("click", function() {
    menu.classList.toggle("display");
    menuUtama3.classList.toggle("display");
    // menuUtama.classList.toggle("display");
})