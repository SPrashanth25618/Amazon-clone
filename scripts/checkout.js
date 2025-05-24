import { cart,removeItemFromCart,UpdatedeliveryOption } from "../data/cart.js";
import {products} from '../data/products.js'
import { format_currency } from "./utils/money.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from "../data/deliveryOptions.js";

const today = dayjs();
const deliveryDate = today.add(7,'days');
const dateString = deliveryDate.format('dddd, MMMM D')

function rendorOrderSummary()
{
    let checkoutproductsHtml = '';
    cart.forEach((item) => {
        const productId = item.productId;
        let matchedproduct;
        products.forEach((product) => {
            if(productId === product.id)
                matchedproduct = product;
        });
        const deliveryOptionid = item.deliveryOptionsId;
        let deliveryOption;
        deliveryOptions.forEach((option) => {
            if(option.id === deliveryOptionid)
                deliveryOption = option;
        });
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliverydays,'days');
        const dateString = deliveryDate.format('dddd, MMMM D')
        checkoutproductsHtml += `
            <div class="cart-item-container js-cart-item-container-${matchedproduct.id}">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchedproduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchedproduct.name}
                </div>
                <div class="product-price">
                    $${format_currency(matchedproduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-deleteLink" data-product-id = "${matchedproduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHtml(matchedproduct,item)}
                </div>
            </div>
            </div>
        `;
    });

    function deliveryOptionsHtml(matchedproduct,item){
        let html = '';
        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliverydays,'days');
            const dateString = deliveryDate.format('dddd, MMMM D')
            const priceString = (deliveryOption.priceCents)?"FREE": `$${format_currency(deliveryOption.priceCents)} -`
            const ischecked = deliveryOption.id === item.deliveryOptionsId;
            html+=`
                <div class="delivery-option js-delivery-option"
                data-product-id = "${matchedproduct.id}"
                data-delivery-option-id = "${deliveryOption.id}">
                    <input type="radio"
                    ${ischecked?'checked':''}
                    class="delivery-option-input"
                    name="delivery-option-${matchedproduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString} Shipping
                    </div>
                    </div>
                </div>
            `
        });
        return html;
    }

    document.querySelector('.js-order-summary').innerHTML = checkoutproductsHtml;

    document.querySelectorAll('.js-deleteLink').forEach((link) => {
        link.addEventListener('click',() => {
            const productId = link.dataset.productId;
            removeItemFromCart(productId);
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
        });
    });

    document.querySelectorAll('.js-delivery-option').forEach((ele) => {
        ele.addEventListener('click',() => {
            const {productId,deliveryOptionId} = ele.dataset;
            UpdatedeliveryOption(productId,deliveryOptionId);
            rendorOrderSummary();
        });
    });
}
rendorOrderSummary();