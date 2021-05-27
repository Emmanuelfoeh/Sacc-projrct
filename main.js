const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".burger-1");
const navbar = document.querySelector(".navbar");
const bar = document.querySelector(".bar");
const item = document.querySelector(".item");


burger.addEventListener("click",()=>{

    lines.forEach((line)=>{
        line.classList.toggle("open");
        line.classList.toggle('burger-1');
        
    });
    navbar.classList.toggle("open");
    // navbar.classList.toggle("navbar");
    bar.classList.toggle("open");
    // bar.classList.toggle("bar");
});

