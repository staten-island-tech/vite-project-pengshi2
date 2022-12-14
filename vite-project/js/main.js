document.getElementById("theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

const menuDiv = document.querySelector("#menu");
display(menu);

function display(menu) {
  forEach((item) => {
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-object">
              <h2>${item.name}</h2>
              <img class="menu-image" src="${item.image}">
              <p class="menu-object-price">$${item.price}</p>
              <p class="menu-object-text">${item.description}</p>
          </div>`
    );
  });
}
