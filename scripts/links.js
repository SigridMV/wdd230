const baseURL = "https://SigridMV.github.io/wdd230/";
const linksURL = "https://SigridMV.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

function displayLinks(weeks) {
    const container = document.getElementById('linksContainer');

    if (!container) {
        console.error("Container element with id 'linksContainer' not found!");
        return;
    }

    weeks.forEach(week => {
        let weekDiv = document.createElement('div');
        weekDiv.classList.add('week');
       
        let weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekDiv.appendChild(weekTitle);

        week.links.forEach(link => {
            let anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            weekDiv.appendChild(anchor);
        });
        
        container.appendChild(weekDiv);
    });
}

getLinks();