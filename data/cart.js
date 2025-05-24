export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart = [
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

function saveToCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(productId){
    let matcheditem;
    cart.forEach((item) => {
        if(productId === item.productId)
            matcheditem = item;
    });
    if(matcheditem){
        matcheditem.quantity += 1;
    }
    else{
        cart.push({
            productId : productId,
            quantity : 1,
            deliveryOptionsId : '1'
        });
    }
    saveToCart();
}

export function removeItemFromCart(productId){
    const newcart = [];
    cart.forEach((item) => {
        if(item.productId !== productId){
            newcart.push(item);
        }
    });
    cart = newcart;
    saveToCart();
}

export function UpdatedeliveryOption(productId,deliveryOptionId){
    let matcheditem;
    cart.forEach((item) => {
        if(productId === item.productId)
            matcheditem = item;
    });
    matcheditem.deliveryOptionsId = deliveryOptionId;
    saveToCart();
}