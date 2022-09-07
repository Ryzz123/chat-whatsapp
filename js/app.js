const videoCall = document.querySelector("#vc");
const call = document.querySelector("#call");
const hilang = document.querySelector("#hilang");
const setelan = document.getElementById("menu3");
const hilang2 = document.querySelector("#tombol");
const menuAntarmuka = document.querySelector(".menu-utama");
const menuUtama2 = document.querySelector(".antarmuka-container");
const menu3 = document.querySelector(".menu-kedua");

videoCall.addEventListener("click", function() {
    document.location.href = "https://wa.me/6281906412862?text=Assalamualaikum...vc+an+bang";
})

call.addEventListener("click", function() {
    document.location.href = "https://wa.me/6281906412862?text=Assalamualaikum...call+an+bang";
})

setelan.addEventListener("click", function() {   
    menuUtama2.classList.toggle("display");
    menu3.classList.toggle("display");
})

hilang.addEventListener("click", function() {
    menuAntarmuka.classList.toggle("display");
    menuUtama2.classList.toggle("display");
})

hilang2.addEventListener("click", function() {
    menuUtama2.classList.toggle("display");
    menuAntarmuka.classList.toggle("display");
})


