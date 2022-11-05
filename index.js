const containerWidth = 960;
const containerHeight = 960;

//create default grid
createGrid(16 * 16);

function createGrid(withNum) {
  let numberOfGrid = withNum;
  const numberOfColumn = Math.sqrt(numberOfGrid);
  const numberOfRow = numberOfColumn;

  const container = document.querySelector(".container");

  //check if old Inner container exist.
  const classExists =
    document.getElementsByClassName("innerContainer").length > 0;
  if (classExists) {
    console.log("✅ class exists on page");
    const oldInner = document.querySelector(".innerContainer");
    oldInner.remove();
  } else {
    console.log("⛔️ class does NOT exist on page");
  }

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("innerContainer");
  container.appendChild(innerContainer);

  innerContainer.style.width = containerWidth + "px";
  innerContainer.style.height = containerHeight + "px";
  innerContainer.style.backgroundColor = "black";
  innerContainer.style.border = "20px solid black";

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
    innerContainer.appendChild(rowClone);
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
  //check number is less than 100, if not ask again
  numberOfGridPerSide = prompt("How many squares per side for the new grid?");
  if (numberOfGridPerSide >= 100) {
    while (numberOfGridPerSide >= 100) {
      alert("Please enter a number less than 100");
      numberOfGridPerSide = prompt(
        "How many squares per side for the new grid?"
      );
    }
  }
  createGrid(numberOfGridPerSide * numberOfGridPerSide);
});
