export const imgLoader = document.createElement("img");
imgLoader.src = "../../img/gif/preloader.gif";
imgLoader.classList.add("popup__loader");
document.querySelector(".popup__list").appendChild(imgLoader);
