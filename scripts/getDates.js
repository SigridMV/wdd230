document.addEventListener('DOMContentLoaded', function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModifiedDate").textContent = "Last Modification: " + lastModifiedDate;
});