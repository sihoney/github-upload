const dropdown = document.querySelector(".dropdown");
const wrapper = document.querySelector('.dropdown-wrapper');
const btn = document.querySelector(".btn");
const photo = document.querySelector('.photos');


btn.addEventListener("click", handleClick);

function handleClick(){
    wrapper.classList.toggle('toggle');
    console.log(dropdown)
}

