const containerWidth = 960
const containerHeight = 960

const container = document.querySelector ('.container');
container.style.width = containerWidth + 'px';
container.style.height = containerHeight + 'px';
container.style.backgroundColor = 'black';
container.style.border = '20px solid black';


const grid = document.createElement('div');
grid.classList.add ('grid');
grid.style.backgroundColor = 'green';
grid.style.width = (containerWidth/4 - 2) + 'px';
grid.style.height = (containerHeight/4 -2) + 'px';
grid.style.maxWidth = 100;
grid.style.border = '1px solid';
grid.style.flexShrink = '0';

let numberOfGrid = 4;
let numberOfRow = numberOfGrid;


const row = document.createElement('div');
row.classList.add ('row');
row.style.backgroundColor = 'red';
row.style.width = containerWidth + 'px';
row.style.height = containerHeight/4 + 'px';
row.style.maxWidth = 100;
row.style.flexShrink = '0';
row.style.display = 'flex';


for (let i = 0; i < numberOfGrid; i++) {
    //put grid in row
    const gridClone = grid.cloneNode(true);
    row.appendChild(gridClone);
 };

 for (let i = 0; i < numberOfRow; i++) {
    //created rows
    const rowClone = row.cloneNode(true);
    container.appendChild(rowClone);   
};
