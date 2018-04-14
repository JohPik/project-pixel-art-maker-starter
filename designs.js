const form = document.querySelector('form');
const grid = document.querySelector('table');

// select size input

function makeGrid(){

  // delete previous grid before starting new grid
  grid.innerHTML ='';

  // set Grid values
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;

  // create Grid
  for (let i = 1; i <= height; i++) {
    let row = document.createElement('tr');
      for (let u = 1; u <= width; u++) {
        let cell = document.createElement('td');
        row.appendChild(cell);
      }
      grid.appendChild(row);
  }
}

form.addEventListener("submit", function(event) {
  makeGrid();
  event.preventDefault();
});

// Change color of Cells when clicked
document.querySelector('table').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
        let colorChosen = document.getElementById("colorPicker").value;
          evt.target.style.backgroundColor = colorChosen;
    }
});
