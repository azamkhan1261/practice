

let data = JSON.parse(localStorage.getItem("items")) || [];

const itemsData = (data) => {
  let prod = document.getElementById("product_details");
  prod.innerHTML = null;
  
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "cart_prod");
    
    let img = document.createElement("img");
    img.src = el.image;
    let n = document.createElement("h4");
    n.innerText = el.name;
    let c = document.createElement("p");
    c.innerText = `Color : ${el.color}`;
    c.style.marginTop="-10px"
    let p = document.createElement("p");
    p.setAttribute("class", "p_price");
    p.innerText = `₹ ${el.price}`;
    let op = document.createElement("p");
    op.setAttribute("class", "o_price");
    op.innerText = `₹ ${el.price+999}`;

    let quant =document.createElement("div");
    quant.setAttribute("class", "quantity")
    quant.innerText="Qty : "
    quant.style.height="5px"

    let pl=document.createElement("button");
    pl.setAttribute("class", "pl")
    pl.innerText="-";
    pl.onclick=()=>{
      subtract(el)
    }

    let plv=document.createElement("input");
    plv.setAttribute("class", "plv");
    plv.value=1;
    plv.style.width="20px"
    

    let mi=document.createElement("button");
    mi.setAttribute("class", "mi")
    mi.innerText="+"
    mi.onclick=()=>{
      add(el);
    }
    quant.append(pl,plv,mi)
    
    let btn = document.createElement("button");
    btn.setAttribute("class","remove")
    btn.innerText = "Remove";
    btn.onclick = () => {
      remove(i);
      window.location.href="cart.html"
    };

    div.append(img, n, c,quant,op, p, btn);
    prod.append(div);
  });
};
itemsData(data);

const remove = (id) => {
  let data = JSON.parse(localStorage.getItem("items")) || [];
  data.splice(id, 1);
  
  localStorage.setItem("items", JSON.stringify(data));
  itemsData(data);
};

const total_amt = document.getElementById("checkout_details");
total_amt.innerHTML = null;

let count = 0;

for (let j = 0; j < data.length; j++) {
  count++;
}

let div1 = document.createElement("div");

div1.setAttribute("class", "vcart");

div1.innerText = `Total Items : ${count}`;
total_amt.append(div1);

let total = 0;
for (let i = 0; i < data.length; i++) {
  total += +data[i].price;
}
let div = document.createElement("div");
div.setAttribute("class", "boldprice");
div.innerText = `Sub Total : ₹ ${total}`;
let x = document.createElement("h4");
x.setAttribute("class", "shipp");
x.innerText = "Shipping: Free";
x.style.color = "green";

let div2 = document.createElement("div");
div2.innerText = `Cart Total : ₹ ${total}`;
div2.style.fontWeight = "800";
div2.style.color="#f7941d"
let z = document.createElement("p");
z.innerText = `Or 3 interest free payment of ₹ ${Math.ceil( total / 3)} with HDFC BANK`;
z.style.fontWeight = "600";
z.style.color="blue";

// div.append(total);
let c_btn = document.createElement("button");
c_btn.setAttribute("class", "check_btn");
c_btn.innerText = "CHECKOUT NOW";
if (count == 0) {
  c_btn.style.display = "none";
  div.style.display = "none";
  x.style.display = "none";
  div2.style.display = "none";
  z.style.display = "none";
}
total_amt.append(div, x, div2, z, c_btn);

c_btn.onclick = () => {
  window.location.href="checkout.html"
};
if (count == 0) {
  let a = document.getElementById("product_details");
  a.setAttribute("class", "empty");
  a.innerText = "Your Cart is Empty!";
  a.style.fontWeight = "900";
}
// let min=0;
//  let mn=document.querySelector(".plv");
// const subtract=(el)=>{
//   if(min!==0){
//     mn--;
//     total--;
//   }
// }
// // let max=0;
// const add=(id)=>{
//   let value=1;
  // for(let i=0; i<30; i++){  
  // }
  // data=data+1
  // let ma=document.querySelector(".plv")
  // ma=value+1;
// }


