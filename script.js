let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  alert("Hello Ryan!");
});

let cells = document.querySelectorAll(".cell");
// cell.addEventListener('click', function () {

// });

cells.forEach(function(cell) {
  cell.addEventListener("click", cellClicked);
});

// function cellClicked(event) {
//   alert(event.target.innerHTML);
//   // alert(event.target.textContent);
// }

function cellClicked(e) {
  // alert(e.target);
  console.log(e.target.id);
}

// function cellClicked(e) { //e is short hand for event and the industry shorthand standard
//   alert(e.target.innerHTML)
// alert(e.target.textContent);

// };

//Chris's explanation for alternate and advanced call back functions

// function clickHandlerOriginal() {
//   alert("Hello Ryan!");
// }

// const clickHandler = () =>
//   alert("Hello Ryan!");

// const arrayFunction = number => alert(number);

// btn.addEventListener("click", clickHandler);

// const array = [1, 2, 3];

// array.map(num => arrayFunction(num));
