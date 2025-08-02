import { rendorOrderSummary } from "./checkout/orderSummary.js";
import { rendorPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage(){
    console.log('Load Page');
}
loadPage().then(() => {
    console.log('Next Step');
});

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    rendorOrderSummary();
    rendorPaymentSummary();
})

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve("value1");
    });
}).then((value) => {
    return new Promise((resolve) => {

        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    rendorOrderSummary();
    rendorPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        rendorOrderSummary();
        rendorPaymentSummary();
    });
});
*/
