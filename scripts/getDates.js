document.addEventListener('DOMContentLoaded', function() {
    // Obtener el año actual y asignarlo al span dentro del primer párrafo del footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Asignar la fecha de la última modificación al segundo párrafo del footer
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModifiedDate").textContent = "Last Modification: " + lastModifiedDate;
});