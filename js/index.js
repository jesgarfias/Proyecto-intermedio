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

//movimiento carrusel 
const displacement=document.querySelector(".carrusel_imgContainer");
const imgItem= document.querySelectorAll(".carrusel_item");
const btnRight=document.querySelector(".btn-right");
const btnLeft=document.querySelector(".btn-left");


console.log(imgItem);
let operador=0;
let widthCon=100/imgItem.length;
let counter=0;
console.log(widthCon);


btnRight.addEventListener("click", e=> moveToRigth());

let moveToRigth = () =>{
    if(counter>=imgItem.length-1){
        counter=0;
        operador=0;
        displacement.style.transform=`translate(-${operador}%)`;
        return;
    }
    counter++;
    operador=operador+widthCon;
    console.log(operador);
    console.log(counter)
    displacement.style.transform=`translate(-${operador}%)`;
    displacement.style.transition="transform .6s";
}

btnLeft.addEventListener("click",e=>moveToLeft());
let moveToLeft = () =>{
    if(counter <= 0){
        counter=imgItem.length-1;
        operador=widthCon*(imgItem.length-1);
        displacement.style.transform=`translate(-${operador}%)`;
        return;
    }
    counter--;
    operador=operador-widthCon;
    console.log(operador);
    console.log(counter);
    displacement.style.transform=`translate(-${operador}%)`;
    displacement.style.transition="transform .6s";
}
/*setInterval(()=>{
    moveToRigth()
},4500)*/
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


