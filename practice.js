const new_div = document.createElement("div");
const new_container;
const new_row;
const new_h1 = document.createElement("h1");
const new_h2 = document.createElement("h2");
const new_h3 = document.createElement("h3");
const new_h4 = document.createElement("h4");
const new_h5 = document.createElement("h5");
const new_h6 = document.createElement("h6");


const new_text_node = document.createTextNode(`This is an (${new_h1}).toUpperCase()`);

const hElements =['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];



// new_h1.appendChild(new_text_node);
// new_div.setAttribute("class", "header-container");


// document.body.appendChild(new_div);



/*
/ Create a div and set class
var new_row = document.createElement("div");
new_row.setAttribute("class", "aClassName" );
/Add some text
new_row.appendChild( document.createTextNode("Some text") );

/Add it to the document body
document.body.appendChild( new_row );
/////////////////////////////////////////////
var newItem = document.createElement('div');
newItem.style = ('background-color:red');
newItem.className = ('new_class');
newItem.innerHTML = ('<img src="./profitly_files/TimCover1_bigger.jpg" width=50 height=50> some long text with ticker $DDSSD');
var list = document.getElementById('x-auto-1');
list.insertBefore(newItem, list.childNodes[0]);
///////////////////////////////////////////
 or new_row.className = "aClassName";

` window.addEventListener('click', ()=> {
   x.classList.add('header-container')
   document.body.appendChild(x).appendChild(h1).appendChild(text);
})`


let secondDiv = document.createElement("DIV");
let orderedList = document.createElement("OL");
const ListItemBtn = document.getElementsByClassName('ListItemBtn')
let n = 1;
 ListItemBtn.addEventListener("click", () => {
    n++;
    let createLi = document.createElement("li");
    let listItemText = document.createTextNode("This is list item " + n);
    createLi.appendChild(listItemText);
    orderedList.appendChild(createLi);
    secondDiv.appendChild(orderedList);
  });


 class Div {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "header-container";
    this.div.addEventListener("DOMContentLoaded", () => {
      // console.log(this);
      this.divText = document.createTextNode(
        "This is my first DIV created with JavaScript"
      );
      this.div.appendChild(this.divText);
      document.body.appendChild(this.div);

      const container = document.querySelector(".header-container");
      let new_h1 = document.createElement("h1");
      let new_h1Text = document.createTextNode("I'm an H1");
      new_h1.appendChild(new_h1Text);
      container.appendChild(new_h1);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let div1 = document.createElement("div");
  // div1.innerText = "This is a div";
  // let div1Text = document.createTextNode(
  //   "This is my first DIV created with JavaScript"
  // );
  // div1.appendChild(div1Text);
  div1.className = "header-container";
  document.body.appendChild(div1);

  const container = document.querySelector(".header-container");
  let new_h1 = document.createElement("h1");
  let new_h1Text = document.createTextNode("I'm an H1");
  new_h1.appendChild(new_h1Text);
  container.appendChild(new_h1);
  // let h1Text = document.createTextNode("I've been clicked!");
  // h1.appendChild(h1Text);
  // div.innerText = "This is a div";
  document.body.appendChild(h1);
});


 */
