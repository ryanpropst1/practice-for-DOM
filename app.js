const hElements = ["h1", "h2", "h3", "h4", "h5", "h6"];
class Div {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "header-container";
    document.body.appendChild(this.div);
  }
  insertHElements(divCont) {
    hElements.forEach(element => {
      const new_h = document.createElement(`${element}`);
      const new_text_node = document.createTextNode(`This is an ${element}`);
      new_h.appendChild(new_text_node);
      new_h.className = `${element}`;
      new_h.style.color = getRandomColor();
      // console.group(this.new_h);
      new_h.addEventListener("dblclick", e => {
        // console.log(e.target);
        // console.log(e.target.className);
        let header = e.target;
        // console.log(header);
        header.style.color = getRandomColor();
      });
      // console.log(element, divCont, this.new_h);
      divCont.appendChild(new_h);
    });
  }
  insertBtn(divBtn) {
    let btn = document.createElement("button");
    btn.innerHTML = "Click to add new list item";
    btn.className = "listBtn";
    btn.style.backgroundColor = "#348ceb";
    btn.style.color = "white";
    divBtn.appendChild(btn);
  }

  updateColor() {
    let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}
    , ${randomVal(0, 255)}
    )`;
    return randomColor;
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  let New_div = new Div();
  let container = document.querySelector(".header-container");
  New_div.insertHElements(container);
  New_div.insertBtn(container);

  const listItemBtn = document.querySelector(".listBtn");
  // console.log(listItemBtn);
  let n = 1;
  listItemBtn.addEventListener("click", addListItem);
  let orderedList = document.createElement("OL");
  container.appendChild(orderedList);

  function addListItem() {
    let listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.id = "list-item-" + n;
    let listItemText = document.createTextNode("This is list item " + n);
    console.log(listItem);
    n++;
    ``;
    listItem.appendChild(listItemText);
    orderedList.appendChild(listItem);
    listItem.addEventListener("click", e => {
      let itemColor = e.target;
      console.log(itemColor);
      itemColor.style.color = getRandomColor();
    });
    listItem.addEventListener("dblclick", function(e) {
      console.log(e.target);
      orderedList.removeChild(e.target);
    });
  }

  function itemColor() {}
});

// let New_div = new Div();

// document.addEventListener("DOMContentLoaded", () => {
// console.log(this);
// let New_div = new Div();
// document.body.append(New_div);

// const container = document.querySelector(".header-container");
// const hElements = ["h1", "h2", "h3", "h4", "h5", "h6"];

// let new_h1 = document.createElement("h1");
// let new_text_node = document.createTextNode(`This is an ${new_h1}`);
// let new_h1Text = document.createTextNode("I'm an H1");
// new_h1.appendChild(new_h1Text);
// new_h1.appendChild(new_text_node);
// container.appendChild(new_h1);

// function insertHElements() {
//   hElements.forEach(element => {
//     let new_h1 = document.createElement(`${element}`);
//     let new_text_node = document.createTextNode(`This is an ${element}`);
//     new_h1.appendChild(new_text_node);
//     container.appendChild(new_h1);
//   });
// }
// });
