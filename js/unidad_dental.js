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
//desplegar productos
const uniContainer=document.querySelector(".products_container");
const createList=(products)=>{
    products.forEach(unidad => {
        const newUniDen=document.createElement("div");
        newUniDen.className="product_element";
        newUniDen.setAttribute("id",`${unidad.id}`)
        newUniDen.innerHTML=`
        <img src= ${unidad.image} />
        <div class="actionButtons_container">
            <div class="action_buttons">
                <svg aria-label="add-to-cart" class="addToCart_button" id=${unidad.id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M90 190h67.3v67.3c0 11.3 9.1 20.4 20.4 20.4s20.4-9.1 20.4-20.4V190h67.3c11.3 0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4h-67.3V81.8c0-11.3-9.1-20.4-20.4-20.4s-20.4 9.1-20.4 20.4v67.3H90c-11.3 0-20.4 9.1-20.4 20.4S78.8 190 90 190"/><path d="M475.4 10.8h-98.5c-11.3 0-20.4 9.1-20.4 20.4V312H36.9c-11.3 0-20.4 9.1-20.4 20.4s9.1 20.4 20.4 20.4h339.9c11.3 0 20.4-9.1 20.4-20.4V51.7h78.1c11.3 0 20.4-9.1 20.4-20.4.1-11.3-9.1-20.5-20.3-20.5M129.1 363.4C91 363.4 60 394.2 60 432.1s31 68.7 69.1 68.7 69.1-30.8 69.1-68.7-31-68.7-69.1-68.7m0 96.6c-15.6 0-28.3-12.5-28.3-27.9s12.7-27.9 28.3-27.9 28.3 12.5 28.3 27.9-12.7 27.9-28.3 27.9m177-96.6c-38.1 0-69.1 30.8-69.1 68.7s31 68.7 69.1 68.7 69.1-30.8 69.1-68.7-31-68.7-69.1-68.7m0 96.6c-15.6 0-28.3-12.5-28.3-27.9s12.7-27.9 28.3-27.9 28.3 12.5 28.3 27.9-12.7 27.9-28.3 27.9"/></svg>
                <svg  class="search_button" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7"/></svg>
                <svg class="favorite_button" viewBox="0 0 24 24" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path d="M19.57 5.44a4.91 4.91 0 0 1 0 6.93L12 20l-7.57-7.63A4.91 4.91 0 0 1 7.87 4a4.9 4.9 0 0 1 3.44 1.44 4.5 4.5 0 0 1 .69.88 4.5 4.5 0 0 1 .69-.88 4.83 4.83 0 0 1 6.88 0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"/></svg>
            </div>
        </div>
        <span>${unidad.name}</span>
        <span id=${unidad.id} > ${unidad.id}</span>
        <span>${unidad.price}</span>
        `
        uniContainer.append(newUniDen);
    });
}
createList(uniDent);

const content=document.querySelectorAll(".product_element");
console.log(content)

content.forEach(item => {

    const buttonShow = item.querySelector(".actionButtons_container");
    item.addEventListener("mouseenter",()=>{
        buttonShow.classList.add("showbtn");
    });
    item.addEventListener("mouseleave",()=>{
        buttonShow.classList.remove("showbtn");
    })
});


//funcion contador carrito
const addCounter=()=>{
    let newCounter=elementInCart.reduce((acc,unidad)=> acc + unidad.quantity,0);
    counter.innerText=newCounter;
}
//funcion añadir al carrito 
const addButton=document.querySelectorAll(".addToCart_button");
const counter=document.querySelector("#counter");
//const elementInCart=[];
let elementInCart;
const elementInCartLs=JSON.parse(localStorage.getItem("unidades-dentales"));
if(elementInCartLs){
 elementInCart= elementInCartLs;
 addCounter();
}else{
    elementInCart=[];
}


addButton.forEach(button => {
    button.addEventListener("click",()=>{
        const idButton= button.id;
        const unideProduct=uniDent.find(unidad=>unidad.id===idButton);
        console.log(unideProduct);
        if(elementInCart.some(unidad=>unidad.id===idButton)){
            const index=elementInCart.findIndex(unidad=>unidad.id===idButton);
            elementInCart[index].quantity++
        }else{
            unideProduct.quantity=1;
            elementInCart.push(unideProduct);
            //console.log(elementInCart);
        }
        console.log(elementInCart);
        addCounter();
        localStorage.setItem("unidades-dentales",JSON.stringify(elementInCart));
    })
})

/*const addCounter=()=>{
    let newCounter=elementInCart.reduce((acc,unidad)=> acc + unidad.quantity,0);
    counter.innerText=newCounter;
}*/