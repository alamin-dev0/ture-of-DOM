// document.getElementById('Players-container').childNodes[3].childNodes[3].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode



// create element and set innerText or innerHTMl
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here';



//  find the parent where you will add the child 

const playersList = document.getElementById('players-list');

// console.log(playersList)

// append the child to the parent

playersList.appendChild(newChild);

console.log(playersList.innerText)