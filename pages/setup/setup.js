const $rowsInput = document.getElementById("rows");
const $colsInput = document.getElementById("cols");
const $locationInput = document.getElementById("location");
const $setupBtn = document.getElementById("btn-setup");

export function init({ navigateTo, data }) {
  $setupBtn.addEventListener("click", () =>
    handleSetup(navigateTo, data)
  );
}

const handleSetup = (navigateTo, previousData) => {
  const rows = parseInt($rowsInput.value);
  const cols = parseInt($colsInput.value);
  const location = $locationInput.value.trim();

  if (
    isNaN(rows) || isNaN(cols) ||
    rows < 10 || rows > 20 ||
    cols < 10 || cols > 20 ||
    !location
  ) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  const config = {
    ...previousData,
    boardSize: { rows, cols },
    location,
  };

  navigateTo("battle", config);
};
