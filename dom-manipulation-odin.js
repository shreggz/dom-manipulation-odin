const firstLine = document.createElement('p');
firstLine.classList.add('firstLine');
firstLine.textContent = "Hey I'm red!";
firstLine.style.color = 'red';
container.appendChild(firstLine);


const secondLine = document.createElement('h3');
secondLine.classList.add('secondLine');
secondLine.textContent = "I'm a blue h3!";
secondLine.style.color = 'blue';
container.appendChild(secondLine);

const coloredBox = document.createElement('div');
coloredBox.classList.add('coloredBox');
coloredBox.style.cssText = 'background-color: pink; border-color: black; border-style: solid;';

const thirdLine = document.createElement('h1');
thirdLine.textContent = "I'm in a div";
coloredBox.appendChild(thirdLine);

const fourthLine = document.createElement('p');
fourthLine.textContent = "ME TOO!";
coloredBox.appendChild(fourthLine);

container.appendChild(coloredBox);