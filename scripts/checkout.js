import { rendorOrderSummary } from "./checkout/orderSummary.js";
import { rendorPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve();
        })
    }),
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
