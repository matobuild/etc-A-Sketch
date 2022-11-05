const containerWidth = 960;
const containerHeight = 960;

createGrid();

function createGrid(withNum = 16 * 16) {
    let numberOfGrid = withNum;
    const numberOfColumn = Math.sqrt(numberOfGrid);
    const numberOfRow = numberOfColumn;
  
    const container = document.querySelector(".container");
    container.style.width = containerWidth + "px";
    container.style.height = containerHeight + "px";
    container.style.backgroundColor = "black";
    container.style.border = "20px solid black";
  
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.backgroundColor = "green";
    grid.style.width = containerWidth / numberOfColumn - 2 + "px";
    grid.style.height = containerHeight / numberOfRow - 2 + "px";
    grid.style.maxWidth = 100;
    grid.style.border = "1px solid";
    grid.style.flexShrink = "0";
  
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.backgroundColor = "red";
    row.style.width = containerWidth + "px";
    row.style.height = containerHeight / numberOfRow + "px";
    row.style.maxWidth = 100;
    row.style.flexShrink = "0";
    row.style.display = "flex";
  
    for (let i = 0; i < numberOfColumn; i++) {
      //put grid in row
      const gridClone = grid.cloneNode(true);
      row.appendChild(gridClone);
    }
  
    for (let i = 0; i < numberOfRow; i++) {
      //created rows
      const rowClone = row.cloneNode(true);
      container.appendChild(rowClone);
    }
    const gridList = document.querySelectorAll(".grid");
    gridList.forEach((grid) => {
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "blue";
      });
    });
    
  
  }


const button = document.querySelector("button");
button.addEventListener("click", () => {
  numberOfGridPerSide = prompt("How many squares per side for the new grid?");
  createGrid(numberOfGridPerSide * numberOfGridPerSide);

});



function removeGrid() {
    container.remove();
}

