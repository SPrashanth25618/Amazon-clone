class Cart{
    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;
        this.loadfromStorage();        
    }

    loadfromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        if(!this.cartItems){
        this.cartItems = [
                {
                    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity : 2,
                    deliveryOptionsId : '1'
                },
                {
                    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity : 1,
                    deliveryOptionsId : '2'
                }
            ];
        }
    }

    saveToCart(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
    }

    addtocart(productId){
        if (!this.cartItems) {
            this.cartItems = [];
        }
        let matcheditem;
        this.cartItems.forEach((item) => {
            if(productId === item.productId)
                matcheditem = item;
        });
        if(matcheditem){
            matcheditem.quantity += 1;
        }
        else{
            this.cartItems.push({
                productId : productId,
                quantity : 1,
                deliveryOptionsId : '1'
            });
        }
        this.saveToCart();
    }

    removeItemFromCart(productId){
        const newcart = [];
        this.cartItems.forEach((item) => {
            if(item.productId !== productId){
                newcart.push(item);
            }
        });
        this.cartItems = newcart;
        this.saveToCart();
    }

    UpdatedeliveryOption(productId,deliveryOptionId){
        let matcheditem;
        this.cartItems.forEach((item) => {
            if(productId === item.productId)
                matcheditem = item;
        });
        matcheditem.deliveryOptionsId = deliveryOptionId;
        this.saveToCart();
    }
}

const cart = new Cart('cart-oops');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);