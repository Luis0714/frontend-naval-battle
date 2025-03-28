import ApiService from "../../services/api.js";

const $nicknameInput = document.getElementById("nickname");
const $countrySelect = document.getElementById("country");
const $continueBtn = document.getElementById("btn-start");

export function init({ navigateTo }) {
  loadCountries();
  $continueBtn.addEventListener("click", () => handleContinue(navigateTo));
}

const handleContinue = (navigateTo) => {
  const nickname = $nicknameInput.value.trim();
  const country = $countrySelect.value;

  if (!nickname || !country) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  navigateTo("setup", { nickname, country });
};

const loadCountries = async () => {
  ApiService.getCountries()
    .then((countryArray) => {
      countryArray.forEach((countryObj) => {
        const code = Object.keys(countryObj)[0];
        const name = countryObj[code];

        const $option = document.createElement("option");
        $option.value = code;
        $option.textContent = name;
        $countrySelect.appendChild($option);
      });
    })
    .catch(() => {
      alert("No se pudieron cargar los países. Verifica la conexión o la API.");
    });
};
