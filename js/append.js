//1. parent node
const mainContainer = document.getElementById('main-container');

//2. create child node 
const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1')
h1.innerText = 'Places I want to visit'
placesSection.appendChild(h1)




//3. append placesSection to the mainContainer
mainContainer.appendChild(placesSection);

