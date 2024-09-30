//menu desplegable
const arrow=document.querySelector(".header_productsTitle");

arrow.addEventListener("click",()=>{
    const rot=document.querySelector(".arrow_btn")
    rot.classList.toggle("rot_arrow")
    const ab=document.querySelector(".headerSubmenu_containerList")
    ab.classList.toggle("container_Show")
})

let listElements=document.querySelectorAll(".header_produtsElementTitle");
listElements.forEach(listelemen => {
    listelemen.addEventListener("click",()=>{
        let height=0;
        let menu= listelemen.nextElementSibling;
        console.log(menu.scrollHeight);
        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }
        menu.style.height= `${height}px`
    })
});
let arrowElements=document.querySelectorAll(".header_produtsElementTitle--click")
arrowElements.forEach(arrowItem => {
    arrowItem.addEventListener("click",()=>{
        arrowItem.classList.toggle("arrowB")
    })
});

//contador carrito
const elementInCart=JSON.parse(localStorage.getItem("unidades-dentales"));
const counte=document.querySelector("#counter");

const addCounter=()=>{
    let newCounter=elementInCart.reduce((acc,unidad)=> acc + unidad.quantity,0);
    counte.innerText=newCounter;
}

//const elementInCart=[];
let counterInCart;
const elementInCartLs=JSON.parse(localStorage.getItem("unidades-dentales"));
if(elementInCartLs){
 counterInCart= elementInCartLs;
 addCounter();
}else{
    counterInCart=[];
}


// trancisiones imagenes
const images=document.querySelectorAll(".sigmod_figure");

const triggerAnimation=(entries)=>{
 entries.forEach(entry=>{
    const fidg= entry.target.querySelector('img');
    fidg.classList.toggle("unset",entry.isIntersecting);
 })
}
const options={
    root:null,
    rootMargin:"0px",
    threshold:1
}

const observer=new IntersectionObserver(triggerAnimation,options);
images.forEach(image => {
    observer.observe(image);
})