import { menu } from "./list";

document.getElementById("theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

const menuDiv = document.querySelector(".menu");

shop();

function shop(array) {
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

document.querySelector("#whole").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  shop(menu);
});

document.querySelector("#chicken").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const chicken = menu
    .filter((item) => item.meatType === "chicken")
    .forEach((item) =>
      menuDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="items-thing">
    <h2 class = "item-name">${item.name}</h2>
    <img class="item-image" src= "${item.image}">
    <p class="item-price">${item.price}</p>
    <p class="item-description">${item.description}</p>
</div>`
      )
    );
});
document.querySelector("#Vegetarian").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const vegetarian = menu
    .filter((item) => item.meatType === "none")
    .forEach((item) =>
      menuDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="items-thing">
        <h2 class = "item-name">${item.name}</h2>
        <img class="item-image" src= "${item.image}">
        <p class="item-price">${item.price}</p>
        <p class="item-description">${item.description}</p>
    </div>`
      )
    );
});

document.querySelector("#beef").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const beef = menu
    .filter((item) => item.meatType === "beef")
    .forEach((item) =>
      menuDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="items-thing">
            <h2 class = "item-name">${item.name}</h2>
            <img class="item-image" src= "${item.image}">
            <p class="item-price">${item.price}</p>
            <p class="item-description">${item.description}</p>
        </div>`
      )
    );
});
