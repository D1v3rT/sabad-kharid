class Cart{
    constructor (parent,price,){
        this.parent = parent;
        this.price = price;
        this.products = [];
        this.toShow = [];
        this.parent.addEventListener("click",this);
    }

    showProducts(){
        this.toShow = [...new Set(this.products)];
        this.parent.innerHTML="";
        this.toShow.forEach(i=>{
            const qty = this.products.filter(p=>p.id===i.id).length;
            this.createdCard(i,qty);
        });
        this.CAlC();
    }

    createdCard(data,qty){
        // console.log(data,qty);
        const cardEle = document.createElement("div")
        const imgEle = this.productImg(data);
        const infoEle = this.productInfo(data);
        const controlEle = this.productControl(data,qty);



        cardEle.innerHTML = imgEle;
        cardEle.innerHTML += infoEle;
        cardEle.innerHTML += controlEle;
        this.parent.appendChild(cardEle);
    }

    productImg(data){
        const {image , alt} = data
        const imgJSX = `<img alt=${alt} src=${image}>`
        return  imgJSX
    }

    productInfo(data){
        const {name,price} = data
        const infoJSX = `   <div id="cart-info">
                                <h4>${name}</h4>
                                <p>${price}</p>
                            </div>
        `
        return infoJSX
    }
    productControl(data,qty){
        const {id} = data
        const controlJsx = `
            <div id="cart-control">
                <div>
                    <button data-id=${id}>-</button>
                    <span>${qty}</span>
                    <button data-id=${id}>+</button>
                </div>
                <button data-id=${id}>remove</button>
            </div>
        `
        return controlJsx
    }
    
    
    handleEvent(e){
        // console.log(e);
        const tagName = e.target.tagName;
        // console.log(tagName);
        const id = e.target.dataset.id;
        // console.log(id);
        const type = e.target.innerText;

        if(tagName !== "BUTTON") return;
        // console.log("sd");
        switch(type){
            case "+":
                this.increase(id);
                break
            case "-":
                this.decrease(id)
                break
            case "remove":
                this.remove(id)
                break    
        }
    }

    increase(id){
        const product = this.products.find(p=>p.id===+id)
        // console.log(product);
        this.products.push(product);
        this.showProducts()
    }

    decrease(id){
        const index = this.products.findIndex(p=>p.id===id)
        // console.log(index);
        this.products.splice(index,1)
        this.showProducts()
    }


    remove(id){
        const remove = this.products.filter(p=>p.id!==+id)
        this.products = remove;
        this.showProducts();
    }

    CAlC(){
        const total = this.products.reduce((acc,cur)=>acc+=cur.price,0);
        this.price.innerText="$ "+total;
    }




}




export default Cart