import { homeToggle } from "./homeToggle.js";
import { addToCart } from "./addToCart.js";

let mainCard = document.querySelector(".pro-container");

const api1 = "https://fakestoreapi.com/products";

const fetchData = async () => {
  try {
    let res = await fetch(api1);
    let data = await res.json();

    data.forEach((currentProduct) => {
      const { title, description, price, image, id } = currentProduct;

      let cost = Math.floor(price * 10);
      let des = description;
      if (description.length > 30) {
        des = description.slice(0, 60) + "...";
      }
      const productClone = document.importNode(mainCard.content, true);
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productName").textContent = title;
      productClone.querySelector(".productDescription").textContent = des;
      productClone.querySelector(".actualProductRate").textContent = `${cost}₹`;
      productClone.querySelector(".productRate").textContent = `${cost * 2}₹`;
      productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
      productClone.querySelector(".productQuantity").textContent;

      productClone.querySelector(".pro").addEventListener("click", (event) => {
        homeToggle(event, id);
      });

      productClone.querySelector("#c").addEventListener("click", (event) => {
        addToCart(event, id);
      });
      mainCard.appendChild(productClone);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();
///showing cards
