const wrapper = document.querySelector(".sliderWrapper")
const menu = document.querySelectorAll(".menuItem");

menu.forEach((item,index) =>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    })
})