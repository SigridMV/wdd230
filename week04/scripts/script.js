const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

function updateRangeValue(val) {
    document.getElementById("rangevalue").textContent = val;
}

// Validation for matching passwords
document.getElementById("userForm").onsubmit = function () {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords don't match. Please try again.");
    document.getElementById("password").focus();
    return false; // prevent form submission
  }
  return true;
};
