document.addEventListener("DOMContentLoaded", function () {
  let count = localStorage.getItem("pageVisits") || 0;
  count++;
  localStorage.setItem("pageVisits", count);

  const counterDiv = document.querySelector("#visitCounter");
  counterDiv.textContent = "Número de visitas: " + count;
});
