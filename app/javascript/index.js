import { randomItems } from "./array";

const DomSelectors = {
  container: document.querySelector(".container"),
  buttonContainer: document.querySelector(".buttonContainer"),
};

DomSelectors.container.insertAdjacentHTML(
  "beforeend",
  randomItems.forEach(
    (item) => `<div class = "card" id = "">
    <h1 class = "name" id = "${item.name}">${item.name}</h1>
    <h2 class = "${item.type}">${item.type}</h2>
    <h2 class = "${item.gender}">${item.gender}</h2>
    <h2 class = "canBeFound" id = "${item.canBeFound}">${item.canBeFound}</h2>
  </div>`
  )
);
