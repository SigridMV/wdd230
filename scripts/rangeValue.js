const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

function updateRangeValue(val) {
    document.getElementById("rangevalue").textContent = val;
}