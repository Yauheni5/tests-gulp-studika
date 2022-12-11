import "./import/modules";
import "./import/components";

import "./components/popup";
import "./components/header";

import { loadCities } from "./api/loadCitites";
import { setCities } from "./state/cities";
import { renderCities } from "./components/popup/list";
import { imgLoader } from "./constants/constants";

document.addEventListener("DOMContentLoaded", async () => {

  const cities = await loadCities();
  document.querySelector(".popup__list").removeChild(imgLoader);
  setCities(cities);
  renderCities();

});
