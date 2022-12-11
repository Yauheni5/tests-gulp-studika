import { closePopup } from ".";
import { listChecked } from "./list";

const buttonSubmit = document.querySelector(".popup__button");
const dataSubmit = [];

export const setButtonActive = () => {
  buttonSubmit.classList.add("popup__button_active");
  setEventListener();
};

const handleSubmit = () => {
  const dataElementSubmit = Array.from(listChecked.children);
  dataElementSubmit.forEach(element => {
    dataSubmit.push(element?.textContent);
    console.log(dataSubmit);
  });
  buttonSubmit.removeEventListener("click", handleSubmit);
  buttonSubmit.classList.remove("popup__button_active");
  closePopup();
};

const setEventListener = () => {
  buttonSubmit.addEventListener("click", handleSubmit);
};
