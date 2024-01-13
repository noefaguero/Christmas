const superior__img = document.getElementById("superior__img");
const favorites = document.getElementById("favorites");
const container = document.getElementById("container");

superior__img.addEventListener("click", () => {
  if (favorites.classList.contains("showfavorites")) {
    favorites.classList.remove("showfavorites");
    favorites.classList.add("hidefavorites");
    container.classList.remove("showcontainer");
    container.classList.add("hidecontainer");
  } else {
    favorites.classList.add("showfavorites");
    favorites.classList.remove("hidefavorites");
    container.classList.add("showcontainer");
    container.classList.remove("hidecontainer");
  }
});

superior__img.addEventListener("mouseover", () => {
  superior__img.classList.add("movesuperior");
});

superior__img.addEventListener("animationend", () => {
  superior__img.classList.remove("movesuperior");
});
