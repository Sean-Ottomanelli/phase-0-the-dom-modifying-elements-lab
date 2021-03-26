// Write your code here!

const idMain = document.getElementById('main');
idMain.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "Sean is the champion"