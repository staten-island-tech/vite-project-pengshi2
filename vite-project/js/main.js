import { menu } from "./list";

document.getElementById("theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

let menuDiv = document.querySelector("#menu");

 foo()
function foo() {
 menu.forEach((item) => {
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="items">
              <h2>${item.name}</h2>
              <br>
              <img class="item-image" src=${item.image}>
              <br>
              <p class="item-price">${item.price}</p>
              <br>
              <p class="item-description">${item.description}</p>
          </div>`
    );
  });
}
