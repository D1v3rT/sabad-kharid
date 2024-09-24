class products {
    constructor(parent,products,cart){
        this.parent=parent;
        this.products=products;
        this.cart = cart;
        this.parent.addEventListener("click",this)
    }

    showProducts(){
        this.products.forEach(product => this.createdCard(product))
    }
    createdCard(data){
        const cardEle = document.createElement("div")
        const imgEle = this.productImg(data);
        const infoEle = this.productInfo(data);
        cardEle.innerHTML=imgEle;
        cardEle.innerHTML+=infoEle





        this.parent.appendChild(cardEle);
        
    }


    productImg(data){
        const {image,alt} = data
        // const img = document.createElement("img")
        // img.src= data.image;
        // img.alt= data.alt;
        const img = `<img alt=${alt} src = ${image}>`
        return img;

        // cardEle.appendChild(img);
    }

    productInfo(data){
        const {id,name,price}=data
        const infoJSX = `
            <div id="product-info">
                <h3>${name}</h3>
                <div>
                    <span>${price}</span>
                    <button data-id="${id}">+</button>
                </div>
            </div>
        `
        return infoJSX
    }

    handleEvent(e){
        // console.log(e);
        const element = e.target;
        // console.log(element.tagName);
        // console.log(element.dataset.id);
        if(element.tagName=="BUTTON"){
            this.addToCart(element.dataset.id);
        }
       
    }
    addToCart(id){
        // console.log(id);
        const product = this.products.find( i=>i.id===+id )
        // console.log(product); 
        this.cart.products.push(product) 
        // console.log(this.cart);
        this.cart.showProducts();
    }


}





export default products;