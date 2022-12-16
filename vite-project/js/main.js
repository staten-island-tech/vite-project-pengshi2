import { menu } from "./list";

document.getElementById("theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

function foo() {
  menu.forEach((item) => {
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="items">
              <h2>${item.name}</h2>
              <img class="item-image" src="${item.image}">
              <p class="item-price">${item.price}</p>
              <p class="item-description">${item.description}</p>
          </div>`
    );
  });
}
