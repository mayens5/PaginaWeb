const form = document.getElementById("flight-form");
const departureCity = document.getElementById("departure-city");
const arrivalCity = document.getElementById("arrival-city");
const departureDate = document.getElementById("departure-date");
const roundTripCheckbox = document.getElementById("round-trip");
const returnDateInput = document.getElementById("return-date");
const price = document.getElementById("price");
const resultDiv = document.getElementById("result");


roundTripCheckbox.addEventListener("change", () => {
  if (roundTripCheckbox.checked) {
    returnDateInput.disabled = false;
  } else {
    returnDateInput.disabled = true;
    returnDateInput.value = "";
  }
});

function calculatePrice() {
  const departureDate = new Date(document.getElementById("departure-date").value);
  const returnDate = new Date(document.getElementById("return-date").value);

  if (roundTripCheckbox.checked && departureDate && returnDate) {
    const dayDifference = (returnDate - departureDate) / (1000 * 60 * 60 * 24);
    const price = 500 + (dayDifference * 20); // 500 para el viaje de ida, 20 para el regreso

    resultDiv.innerHTML = `El precio del viaje es: $${price}`;
  } else if (departureDate) {
    resultDiv.innerHTML = "El precio del vuelo de ida es: $500";
  } else {
    resultDiv.innerHTML = "Por favor, ingrese todas las fechas y seleccione la opción de viaje redondo si es necesario.";
  }
}

const prices = {
  "bog-med": 100,
  "bog-cal": 150,
  "med-bog": 100,
  "med-cal": 75,
  "cal-bog": 150,
  "cal-med": 75,
};
const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + 7);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!roundTrip.checked) {
    return;
  }

  const departure = `${departureCity.value}-${arrivalCity.value}`;
  const priceValue = prices[departure];

  if (!priceValue) {
    return;
  }

  const departureDateValue = new Date(departureDate.value);
  const returnDateValue = new Date(returnDate.value);

  if (returnDateValue <= departureDateValue) {
    return;
  }

  const daysDifference = Math.ceil((returnDateValue - departureDateValue) / (1000 * 60 * 60 * 24));
  const totalPrice = priceValue * daysDifference;

  price.value = `$${totalPrice}`;
});

roundTrip.addEventListener("change", () => {
  if (roundTrip.checked) {
    returnDate.value = "";
    returnDate.disabled = false;
    price.value = "";
  } else {
    returnDate.disabled = true;
    price.value = "";
  }
});

departureDate.value = defaultDate.toISOString().split("T")[0];
