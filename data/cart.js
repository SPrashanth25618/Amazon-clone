export const cart = [];

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
            quantity : 1
        });
    }
}