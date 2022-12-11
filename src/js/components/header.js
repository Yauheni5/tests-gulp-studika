import { openPopup } from "./popup";

const headerCity = document.querySelector(".header__city");
const headerBurger = document.querySelector(".header__burger");

headerCity.addEventListener("click", openPopup);
headerBurger.addEventListener("click", openPopup);
