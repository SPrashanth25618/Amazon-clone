import {addtocart,cart,loadfromStorage} from '../../data/cart.js';

describe('test suite: addtocart',() => {
    it('adds an exiting product to the cart',() => {
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity : 1,
                deliveryOptionsId : '1'
            }]);
        });
        loadfromStorage();
        addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
    it('add a new product to the cart',() => {
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadfromStorage();
        addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});