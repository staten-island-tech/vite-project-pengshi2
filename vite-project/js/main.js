import { menu } from "./list";

document.getElementById("theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

let menuDiv = document.querySelector("#menu");

foo();
function foo() {
  menu.forEach((item) => {
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="items-thing">
              <h2 class = "item-name">${item.name}</h2>
              <img class="item-image" src= "${item.image}">
              <p class="item-price">${item.price}</p>
              <p class="item-description">${item.description}</p>
          </div>`
    );
  });
}

document.querySelector("#chicken").addEventListener("click", function() {
    const filtered = menu.filter((item) => item.meatType === "chicken")
})
