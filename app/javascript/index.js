import { randomItems } from "./array";
import "../style/style.css";

const DomSelectors = {
  container: document.querySelector(".container"),
};

const input = document.getElementById("input");
let submitForm = document.getElementById("removeButton");
let reset = document.getElementById("resetBtn");

let newItems = [...randomItems];

randomItems.forEach((item) =>
  DomSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" id = "">
<h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
<img src="${item.imageUrl}" alt="">
<h2 class = "${item.type}">Type: ${item.type}</h2>
<h2 class = "${item.gender}">Gender: ${item.gender}</h2>
<h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
</div>`
  )
);

function addResetListener() {
  reset.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Reset button clicked!");
    DomSelectors.container.innerHTML = "";
    newItems = [...randomItems];
    randomItems.forEach((item) =>
      DomSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <img src="${item.imageUrl}" alt="">
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
      )
    );
  });
}
addResetListener();
submitForm.addEventListener("click", (event) => {
  event.preventDefault();
  checkItemsAlgorithm(input.value);
});

//algorithm = check each item and if something is different do something

function checkItemsAlgorithm(inputValue) {
  for (let i = 0; i < randomItems.length; i++) {
    if (randomItems[i].name === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].gender === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].type === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    } else if (randomItems[i].canBeFound === inputValue) {
      console.log(input.value);
      inputNewItems(input.value);
    }
  }
}

function inputNewItems(value) {
  DomSelectors.container.innerHTML = "";
  newItems = newItems.filter(
    (item) =>
      item.name !== value &&
      item.gender !== value &&
      item.type !== value &&
      item.canBeFound !== value
  );
  newItems.forEach((item) =>
    DomSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
    <img src="${item.imageUrl}" alt="">
    <h2 class = "${item.type}">Type: ${item.type}</h2>
    <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
    </div>`
    )
  );
}
