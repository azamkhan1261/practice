let cart_btn = document.getElementById("cart_qty");
let close_btn = document.getElementById("close_btn");
let cart_sidebar = document.getElementById("cart_sidebar");

cart_btn.onclick = () =>{
    cart_sidebar.style.right = "0";
}

close_btn.onclick = () =>{
    cart_sidebar.style.right = "-400px";
}

const edit_cart=document.getElementById("edit_cart");
const check_btn=document.getElementById("check_btn");

edit_cart.onclick=()=>{
    window.location.href="cart.html"
}
check_btn.onclick=()=>{
    window.location.href="checkout.html"
}
 


let data = JSON.parse(localStorage.getItem("items")) || [];

const itemsData = (data) => {
  let prod = document.getElementById("side_items");
  prod.innerHTML = null;


  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "side_div")
    let img = document.createElement("img");
    img.src = el.image;
    img.style.marginTop="20px"
    let n = document.createElement("h3");
    n.innerText = el.name;
    let c = document.createElement("p");
    c.innerText = `Color : ${el.color}`;
    c.style.fontWeight="500"
    let o=document.createElement("p");
    o.innerText=`Price : ₹${el.price+999}`
    o.style.textDecoration="line-through"
    o.style.color="grey"
    let p = document.createElement("p");
    p.innerText = `Your price : ₹${el.price}`;
    p.style.fontWeight="500"
    let d=document.createElement("h4");
    d.innerText=`Expected Delivery in ${Math.floor(Math.random() * (10 - 6) + 6)} Days`;
    d.style.float="left"
    d.style.fontWeight="500"
    d.style.color="#f7941d"
    div.append(img,n,c,o,p,d);
    prod.append(div)

  });
};
itemsData(data);

const total_amt = document.getElementById("cart_total");
total_amt.innerHTML=null
total_amt.innerText="TOTAL :₹ "
total_amt.style.cursor="pointer"
let total=0;
for (let i=0;i<data.length; i++){
    total+=+data[i].price
}

let div=document.createElement("div");
// div.innerText="total cart"
div.append(total);
total_amt.append(total)
total_amt.onclick = () => {
    window.location.href="cart.html"
}




const view = document.getElementById("view_cart");
view.innerHTML=null;
//  view.innerText=`CART :${ }`;
view.style.cursor="pointer";
view.style.textDecoration="underline";

let count=0;
for(let j=0; j<data.length; j++){
    count++
}

let div1=document.createElement("div");
div1.setAttribute("class", "viewcart")

div1.innerText=`VIEW CART : (${count})`

view.append(div1)

view.onclick = () => {
    window.location.href="cart.html"
}

const qty=document.getElementById("cart_quantity");
qty.innerHTML=null;
let cdiv= document.createElement("p");
cdiv.innerText=count;
qty.append(cdiv)