import { randomItems } from "./array";
import "../style/style.css";

const DomSelectors = {
  container: document.querySelector(".container"),
  buttonContainer: document.querySelector(".buttonContainer"),
};
const input = document.getElementById("input");
const submitForm = document.getElementById("removeButton");
let newItems = [];

submitForm.addEventListener("click", (event) => {
  event.preventDefault();
  randomItems.forEach((item) => {
    if (item.name === input.value) {
      console.log(input.value);
      inputNewItems();
      //show every item that doesn't match input value
    } else if (item.gender === input.value) {
      console.log(input.value);
      inputNewItems();
    } else if (item.type === input.value) {
      console.log(input.value);
      inputNewItems();
    } else if (item.canBeFound === input.value) {
      console.log(input.value);
      inputNewItems();
    }
  });
});

function inputNewItems(item) {
  newItems = randomItems.filter(item != input.value);
  newItems.forEach((item) =>
    DomSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "">
  <h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
  <h2 class = "${item.type}">Type: ${item.type}</h2>
  <h2 class = "${item.gender}">Gender: ${item.gender}</h2>
  <h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
  </div>`
    )
  );
}

randomItems.forEach((item) =>
  DomSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" id = "">
<h1 class = "name" id = "${item.name}">Name: ${item.name}</h1>
<h2 class = "${item.type}">Type: ${item.type}</h2>
<h2 class = "${item.gender}">Gender: ${item.gender}</h2>
<h2 class = "canBeFound" id = "${item.canBeFound}">Can be found: ${item.canBeFound}</h2>
</div>`
  )
);
