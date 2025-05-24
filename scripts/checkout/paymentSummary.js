import {cart} from '../../data/cart.js';
import { getproduct } from '../../data/products.js';
import { getdeliveryoption } from '../../data/deliveryOptions.js';
import { format_currency } from '../utils/money.js';

export function rendorPaymentSummary(){
    let productPriceCents = 0;
    let shippingPrice = 0;
    cart.forEach((item) => {
        const product = getproduct(item.productId);
        productPriceCents += product.priceCents*item.quantity;
        const deliveryOption = getdeliveryoption(item.deliveryOptionsId);
        shippingPrice += deliveryOption.priceCents
    });
    const totalbeforetaxcents = productPriceCents+shippingPrice;
    const taxcents = totalbeforetaxcents*0.1;
    const totalCents = totalbeforetaxcents + taxcents;

    const paymentSummaryHtml = `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${format_currency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${format_currency(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${format_currency(totalbeforetaxcents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${format_currency(taxcents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${format_currency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;
}