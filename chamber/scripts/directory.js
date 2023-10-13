const url = '../data/members.json';
const cards = document.querySelector('#membersContainer');

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.members);
}

getDirectoryData();

const displayDirectory = (members) => {
    members.forEach((member) => {
        
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('p');
        let additionalInfo = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.href = member.website;
        website.textContent = `Visit Website`;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        additionalInfo.textContent = member.additionalInfo;
        image.setAttribute('src', member.image);  
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');  
        image.setAttribute('width', '200px');
        image.setAttribute('height', '300px');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(additionalInfo);
        card.appendChild(image);
        cards.appendChild(card);
    });
};