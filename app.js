const wrapper = document.querySelector(".sliderWrapper")
const menu = document.querySelectorAll(".menuItem");


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSize = document.querySelectorAll(".size");
const currentProductColor = document.querySelectorAll(".color");


menu.forEach((item,index) =>{
    item.addEventListener("click", ()=>{
        // change the current slide 
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        choosenProduct = products[index];

        // change text of current product
        currentProductTitle.textContent = choosenProduct.title;

        // chnage price of current product according to selected menu item 
        currentProductPrice.textContent = `$${choosenProduct.price}`;

        // change Img of currentProduct
        currentProductImg.src = choosenProduct.colors[0].img;

        // assign new color 
        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});

currentProductColor.forEach((color,index) =>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
        
    })
})

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click", ()=>{

        currentProductSize.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})