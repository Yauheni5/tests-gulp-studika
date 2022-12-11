import { renderCities } from "./list";
import "./input";
import "./buttonSubmit";
import { popupInput } from "./input";

const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".header__popup-wrapper");

function closePopupEscape(e) {
  if (e.key === "Escape") {
    popup.classList.remove("popup_active");
  }
}

export const closePopup = () => {
  popup.classList.remove("popup_active");
  popupWrapper.classList.remove("header__popup-wrapper_active");
  document.removeEventListener("keyup", closePopupEscape);
  popupWrapper.removeEventListener("click", closePopupClick);
};

export const closePopupClick = (e) => {
  if (e.target.classList.contains("header__popup-wrapper_active")) {
    closePopup();
  }
};

export const openPopup = () => {
  popupInput.value = "";
  popup.classList.add("popup_active");
  popupWrapper.classList.add("header__popup-wrapper_active");
  renderCities();
  popupWrapper.addEventListener("click", closePopupClick);
  document.addEventListener("keyup", closePopupEscape);
};
