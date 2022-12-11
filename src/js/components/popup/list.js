import { getCities } from "../../state/cities";
import { setButtonActive } from "./buttonSubmit";
import { popupInput } from "./input";

const listCities = document.querySelector(".popup__list");
export const listChecked = document.querySelector(".popup__list-checked");

function deleteCityFromFilter(e) {
  e.currentTarget.parentNode.remove();
}

function handleListenerButtonsRemoveCityFilter() {
  const popupButtonsRemove = document.querySelectorAll(".popup__button-remove");
  popupButtonsRemove.forEach((buttonRemove) => {
    buttonRemove.addEventListener("click", deleteCityFromFilter);
  });
}

function checkCityFilter(e) {
  popupInput.value = "";
  e.stopPropagation();
  const newElementChecked = e.currentTarget.cloneNode(true);
  newElementChecked.classList.add("popup__element-checked");
  newElementChecked.classList.remove("popup__element");

  const newButtonRemove = document.createElement("button");
  newButtonRemove.classList.add("popup__button-remove");
  listChecked.append(newElementChecked);

  if (document.querySelector(".popup__region") && document.querySelector(".popup__region").textContent != newElementChecked.textContent) {
    const newElementRegionChecked = document.querySelector(".popup__region")?.cloneNode(true);
    newElementRegionChecked?.classList.add("popup__region-checked");
    newElementRegionChecked?.classList.remove("popup__region");
    newElementChecked.append(newElementRegionChecked, newButtonRemove);
    document.querySelector(".popup__region")?.remove();
  } else newElementChecked.append(newButtonRemove);

  handleListenerButtonsRemoveCityFilter();
  e.currentTarget.remove();

  setButtonActive();
  renderCities();
}

export const addEventListenerElements = () => {
  const popupElementsList = document.querySelectorAll(".popup__element");

  popupElementsList.forEach((element) => {
    element.addEventListener("click", checkCityFilter);
  });
};

export const addElementNode = (item, regionCity) => {
  const newElement = document.createElement("li");
  newElement.classList.add("popup__element");
  newElement.textContent = item?.name;
  listCities.append(newElement);
  if(regionCity) {
    addRegionCity(newElement, regionCity);
  }
};

export const addRegionCity = (parentNode, regionCity) => {
  const newRegion = document.createElement("p");
  newRegion.classList.add("popup__region");
  newRegion.textContent = regionCity;
  parentNode.append(newRegion);
};

export const renderCities = () => {
  getCities().forEach((item) => {
    addElementNode(item);
  });

  addEventListenerElements();
};
