import products from "./models/products.js";
import { fenchData } from "./utild/httpreq.js"
import Cart from "./models/cart.js"




const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document.getElementById("total-price").querySelector("span");







async function render(){
    // console.log("load");
    const productDAta = await fenchData();
    // console.log(productDAta);
    const cartIntance = new Cart (cartListNode,totalPriceNode);
    const productsIntance = new products(productsNode,productDAta,cartIntance);
    console.log(productsIntance);
    console.log(cartIntance);
    // console.log(productsIntance);
    productsIntance.showProducts();

}


document.addEventListener("DOMContentLoaded",render)