import "./import/modules";
import "./import/components";
import { Api } from "../blocks/components/Api";

const listCities = document.querySelector(".popup__list");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");
const headerCity = document.querySelector(".header__city");
const popupInput = document.querySelector(".popup__input");
const listChecked = document.querySelector(".popup__list-checked");


const options = {
    url: "https://studika.ru/api/areas",
};
const api = new Api(options);

let citiesObj = [];

function addElementNode(item){
    let newElement = document.createElement("li");
    newElement.classList.add("popup__element");
    newElement.textContent = item?.name;
    return listCities.append(newElement);
}

function renderCities(citiesObj) {
    citiesObj[0].forEach((item) => {
        addElementNode(item);
    });
    addEventListenerElements();
}


function addEventListenerPopupClose(){
    console.log("Helooodasdas");
    document.addEventListener("click", closePopup);
}

function openPopup() {
    popup.classList.add("popup_active");
    popupWrapper.classList.add("popup__wrapper_active");
    renderCities(citiesObj);
    addEventListenerPopupClose();
    document.addEventListener("keyup", closePopupEscape);
    headerCity.removeEventListener("click", openPopup);
}

function closePopupEscape(e) {
    if (e.key === "Escape") {
        popupWrapper.classList.remove("popup__wrapper_active");
        popup.classList.remove("popup_active");
    }
}

function closePopup(e) {
  console.log(e.target)
    if (e.target.classList.contains("popup__wrapper")) {
        popupWrapper.classList.remove("popup__wrapper_active");
        popup.classList.remove("popup_active");
    }
    document.removeEventListener("click", closePopup);
    document.removeEventListener("keyup", closePopupEscape);

    headerCity.addEventListener("click", openPopup);
}

function checkCityFilter(e) {
    const newElementChecked = e.currentTarget.cloneNode(true);
    newElementChecked.classList.add("popup__element-checked");
    newElementChecked.classList.remove("popup__element");
    const newButtonRemove = document.createElement("button");
    newButtonRemove.classList.add("popup__button-remove");
    listChecked.append(newElementChecked);
    newElementChecked.append(newButtonRemove);
    handleListenerButtonsRemoveCityFilter();
    e.currentTarget.remove();
}

function deleteCityFromFilter(e){
  e.currentTarget.parentNode.remove();
}

function handleListenerButtonsRemoveCityFilter(){
    const popupButtonsRemove = document.querySelectorAll(".popup__button-remove");
    popupButtonsRemove.forEach((buttonRemove) => {
        buttonRemove.addEventListener("click", deleteCityFromFilter);
    });
}

function addEventListenerElements() {
    const popupElementsList = document.querySelectorAll(".popup__element");
    popupElementsList.forEach((element) => {
        element.addEventListener("click", checkCityFilter);
    });
}

headerCity.addEventListener("click", openPopup);

popupInput.addEventListener("input", (e) => {
    const newElementsList = document.querySelectorAll(".popup__element");
    newElementsList.forEach((item) => {
        item.textContent.includes(e.target.value) ? "" : item.remove();
    });
    citiesObj[0].forEach((item) => {
        if (item.name.toLowerCase().includes(e.target.value)) {
            addElementNode(item);
        }
        if (item.cities) {
            item.cities.forEach((element) => {
                if (element.name.toLowerCase().includes(e.target.value)) {
                    addElementNode(element);
                }
            });
        }
    });
    addEventListenerElements();
});

function getDataAllPromise() {
    api
        .getAllPromise()
        .then((data) => (citiesObj = data))
        .catch((err) => console.log(err));
}
getDataAllPromise();
