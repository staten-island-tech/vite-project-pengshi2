import { menu } from "./js/menu.js";
np;

document.getElementById("theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

const menuDiv = document.querySelector("#menu");
display(menu);

function test() {
  forEach((item) => {
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="items">
              <h2>${item.name}</h2>
              <img class="item-image" src="${item.image}">
              <p class="item-price">$${item.price}</p>
              <p class="item-description">${item.description}</p>
          </div>`
    );
  });
}
