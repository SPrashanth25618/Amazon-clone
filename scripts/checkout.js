import { rendorOrderSummary } from "./checkout/orderSummary.js";
import { rendorPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';
loadProducts(() => {
    rendorOrderSummary();
    rendorPaymentSummary();
});