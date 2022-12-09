import { menu } from "./list.js";

const menuDiv = document.querySelector("#menu");
display(menu);

document.querySelector("#all").addEventListener("click", function () {
  menuDiv.innerHTML = ``;
  display(menu);
});

document.querySelector("beef").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "beef");
  display(filtered);
});

document.querySelector("#theme").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});
