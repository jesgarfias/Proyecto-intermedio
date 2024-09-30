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

//======== despliegue carrito================
const contenedor=document.querySelector("#hola")
const elementInCart=JSON.parse(localStorage.getItem("unidades-dentales"));
console.log(contenedor);
console.log(elementInCart);

const loadItems=()=>{
    contenedor.innerHTML="";
    elementInCart.forEach(elemento => {
    const cartContainer=document.createElement("div");
    cartContainer.classList.add("product_item");
    console.log(elemento.image);
    cartContainer.innerHTML=`
    <div class="item_container">
        <img src=${elemento.image} alt="">
        <div class="item_title">
            <h2>${elemento.name}</h2>
        </div>
        <div class="item_element">
                <p>Cantidad</p>
                <span>${elemento.quantity}</span>
            </div>
            <div class="item_element">
                <p>Precio</p>
                <span>${elemento.price}</span>
            </div>
            <svg area-label="delate" class="delate-button" width="30" height="30" id="${elemento.id}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1" fill="#0D0D0D"/></svg>  
        </div>
    ` ;
    contenedor.append(cartContainer)
});

    //=========contador carrito=======================
    const addCounter=()=>{
        let newCounter=elementInCart.reduce((acc,unidad)=> acc + unidad.quantity,0);
        counter.innerText=newCounter;
    }
    const counter=document.querySelector("#counter");
    let counterInCart;
    const elementInCartLs=JSON.parse(localStorage.getItem("unidades-dentales"));
    console.log(elementInCartLs);
    if(elementInCartLs){
    counterInCart= elementInCartLs;
    addCounter();
    }else{
        counterInCart=[];
    }
    //============ borrar productos
    const delateItem=()=>{
        delateBtn=document.querySelectorAll(".delate-button");
        console.log(delateBtn)
        delateBtn.forEach(btn=>{
            btn.addEventListener("click",quitItem);
        })
    }
    const quitItem=(e)=>{
        const btnId=e.currentTarget.id;
        const itemDelated=elementInCart.findIndex(elemento=>elemento.id===btnId);
        elementInCart.splice(itemDelated,1);
        localStorage.setItem("unidades-dentales",JSON.stringify(elementInCart));
        loadItems();
    }
    delateItem();
}

loadItems();


