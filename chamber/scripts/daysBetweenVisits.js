document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById('visitMessage');
    const oneDay = 84600000; 
    const currentDate = Date.now();
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    
    if (!lastVisitDate) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";;
    } else {
        const daysSinceLastVisit = Math.round((currentDate - lastVisitDate) / oneDay);

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    localStorage.setItem('lastVisitDate', currentDate);
});