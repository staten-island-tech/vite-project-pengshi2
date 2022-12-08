function cool();
document.getElementById("theme").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

// const galleryDiv = document.querySelector("#gallery");
// display(gallery);

// document.querySelector("#all").addEventListener("click", function () {
//   galleryDiv.innerHTML = ``;
//   display(gallery);
// });

// function display(array) {}
// galleryDiv.insertAdjacenHTML("beforeend"`<div class = "gallery-player>
//   <h2>${player.name}</h2>
//   <img class = "gallery-image" src = ${item.image}">
//   <p class = "gallery-player-reigon> ${player.reigon}</p>
//   <p class = "gallery-player-team>${player.team}</p>
//   <p class = "gallery-player-vctwinner>${player.vctwinner}</p>
// </div>`);
