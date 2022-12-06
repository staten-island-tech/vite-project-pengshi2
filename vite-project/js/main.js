document.getElementById("theme").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

const galleryDiv = document.querySelector("#gallery");
display(gallery);

document.querySelector("#all").addEventListener("click", function () {
  galleryDiv.innerHTML = "";
  display(gallery);
});

function display(array) {}
galleryDiv.insertAdjacenHTML("afterend"`<div class = "gallery-player>
  <h2>${player.name}</h2>
  <img class = "gallery-image" src = ${item.image}">
  <p class = "gallery-player-reigon> ${player.reigon}</p>
  <p class = "gallery-player-team>${player.team}</p>
  <p class = "gallery-player-vctwinner>${player.vctwinner}</p>
  <p class = "gallery-player-role>${player.role}</p>
</div>`);
