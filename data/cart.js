export const cart = [
    {
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1
    },
    {
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 2
    }
];

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