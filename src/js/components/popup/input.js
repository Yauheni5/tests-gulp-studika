/* eslint-disable indent */
import { getCities } from "../../state/cities";
import { addElementNode, addEventListenerElements, renderCities } from "./list";

export const popupInput = document.querySelector(".popup__input");
const popupButtonClearInput = document.querySelector(".popup__input-clear");

const handleClearInput = () => {
	popupInput.value = "";
	popupButtonClearInput.classList.remove("popup__input-clear_active");
	popupButtonClearInput.removeEventListener("click", handleClearInput);
	renderCities();
};

popupInput.addEventListener("input", (e) => {
	const newElementsList = document.querySelectorAll(".popup__element");

	if (e.target.value) {
		popupButtonClearInput.classList.add("popup__input-clear_active");
		popupButtonClearInput.addEventListener("click", handleClearInput);
	} else {
		newElementsList.forEach((item) => item.remove());
		handleClearInput();
	}


	newElementsList.forEach((item) => {
		item.textContent.includes(e.target.value) ? "" : item.remove();
	});

	getCities().forEach((item) => {
		if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
			addElementNode(item);
		}
		if (item.cities) {
			item.cities.forEach((element) => {
				if (element.name.toLowerCase().includes(e.target.value.toLowerCase())) {
					addElementNode(element, item.name);
				}
			});
		}
	});

	addEventListenerElements();
});
