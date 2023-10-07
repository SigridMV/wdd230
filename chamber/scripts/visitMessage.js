document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById('visitMessage');
    const currentDate = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; 
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    
    if (!lastVisitDate) {
        visitMessage.textContent = "Welcome for the first time!";;
    } else {
        const daysSinceLastVisit = Math.round((currentDate - lastVisitDate) / oneDay);

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "You visited today. Welcome back!";
        } else if (daysSinceLastVisit === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    localStorage.setItem('lastVisitDate', currentDate);
});