import { getCartProductFromLs } from "./getCartProductFromLs.js";

export const updateCartProductTotal = () => {
  let initialValue = 0;
  let cartSubTotal = document.querySelector(".stotal");
  let cartTotal = document.querySelector(".total");
  let localCartProducts = getCartProductFromLs();
  let totalProductPrice = localCartProducts.reduce((accum, curElm) => {
    let productPrice = parseInt(curElm.price) || 0;
    return accum + productPrice;
  }, initialValue);
  console.log(totalProductPrice);
  let finalPrice = Math.floor(totalProductPrice * 0.18 + totalProductPrice);
  console.log(finalPrice);

  cartSubTotal.textContent = `${totalProductPrice}₹`;
  cartTotal.textContent = `${finalPrice}₹`;
};
